import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/common-styles';
import CardButton from './components/card-button';
import DealerHand from './components/dealer-hand';
import PlayerHand from './components/player-hand';
import {Deck} from './components/deck';
// const statisticIcon = require('./assets/statistics.png');

export default function Home({navigation}: any) {
  const [deck, setDeck] = useState<string[]>(Object.keys(Deck));
  const [player, setPlayer] = useState<string[]>([]);
  const [dealer, setDealer] = useState<string[]>([]);
  const [wager, setWager] = useState<number>(100);
  const [draw, setDraw] = useState<boolean>(false);

  const drawPlayer = () => {
    const mutDeck = Shuffle(deck);
    const cards = mutDeck.splice(0, 1);
    setPlayer([...player, cards[0]]);
    setDeck([...mutDeck]);
  };

  const drawDealer = useCallback(() => {
    const mutDeck = Shuffle(deck);
    const cards = mutDeck.splice(0, 1);
    const newDealer = [...dealer, cards[0]];
    setDealer(newDealer);
    setDeck([...mutDeck]);

    const Hand = EvaluateHand(newDealer);
    if (Hand.includes('/')) {
      const soft = +Hand.split('/')[1];
      if (soft <= 17) {
        setDraw(true);
      }
    } else if (+Hand <= 16) {
      setDraw(true);
    } else {
      setDraw(false);
    }
  }, [dealer, deck]);

  const Shuffle = (deckToShuffle: string[]) => {
    let currentIndex = deckToShuffle.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [deckToShuffle[currentIndex], deckToShuffle[randomIndex]] = [
        deckToShuffle[randomIndex],
        deckToShuffle[currentIndex],
      ];
    }
    return deckToShuffle;
  };

  function EvaluateHand(Hand: string[]) {
    let value = 0;
    let ace = false;

    for (let i = 0; i < Hand.length; i++) {
      const element = Hand[i];
      const temp = element.split(':')[0];

      if (temp === 'J' || temp === 'Q' || temp === 'K') {
        value += 10;
      } else if (temp === 'A') {
        value += 1;
        ace = true;
      } else {
        value += +temp;
      }
    }

    if (ace) {
      if (value + 10 > 21) {
        return value + '';
      } else {
        return value + '/' + (value + 10);
      }
    } else {
      return value + '';
    }
  }

  const EndRound = () => {
    let Hand = EvaluateHand(dealer);
    if (Hand.includes('/')) {
      const soft = +Hand.split('/')[1];
      if (soft <= 17) {
        setDraw(true);
      }
    } else if (+Hand <= 16) {
      setDraw(true);
    } else {
      setDraw(false);
    }
  };

  useEffect(() => {
    if (draw === true) {
      drawDealer();
    }
  }, [draw, drawDealer, dealer]);

  useEffect(() => {
    const mutDeck = Shuffle(deck);
    const cards = mutDeck.splice(0, 4);
    setPlayer([...player, cards[0], cards[2]]);
    setDealer([...dealer, cards[1], cards[3]]);
    setDeck([...mutDeck]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screenView}>
      <Text style={styles.headerText}>blackjackdle</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
        {/* <Image style={} source={statisticIcon} /> */}
      </TouchableOpacity>

      <View style={homeStyles.both}>
        <View style={homeStyles.top}>
          <View style={homeStyles.TextJustifyBetween}>
            <Text style={homeStyles.playerText}>Dealer</Text>
            <Text style={homeStyles.playerText}>
              HandValue: {EvaluateHand(dealer)}
            </Text>
          </View>
          <DealerHand dealer={dealer} />
          <Text style={homeStyles.playerText}>
            -- Dealer hits on soft 17 --
          </Text>
          <View style={homeStyles.TextJustifyBetween}>
            <Text style={homeStyles.playerText}>You</Text>
            <Text style={homeStyles.playerText}>
              HandValue: {EvaluateHand(player)}
            </Text>
          </View>
          <PlayerHand player={player} />
        </View>

        <View style={homeStyles.bottom}>
          <Text style={homeStyles.playerText}>Wager: {wager}</Text>
          <View style={homeStyles.actionCardsView}>
            <CardButton title={'Hit'} onClick={() => drawPlayer()} />
            <CardButton
              title={'Double'}
              onClick={() => {
                drawPlayer();
                const newWager = wager * 2;
                setWager(newWager);
              }}
            />
            <CardButton title={'Stand'} onClick={() => EndRound()} />
          </View>
        </View>
      </View>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  TextJustifyBetween: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  playerCardsView: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    gap: 12,
    padding: 8,
  },
  playerText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
  },
  actionCardsView: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    gap: 12,
    padding: 8,
  },
  top: {width: '100%', alignItems: 'center'},
  bottom: {width: '100%', alignItems: 'center'},
  both: {width: '100%', height: '80%', gap: '40%'},
});
