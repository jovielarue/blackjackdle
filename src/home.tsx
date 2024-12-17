import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles/common-styles';
import CardButton from './components/card-button';
import DealerHand from './components/dealer-hand';
import PlayerHand from './components/player-hand';
import {Deck} from './components/deck';
import Waiting from './components/waiting';
import {storage} from './storage';

const statisticIcon = require('./assets/statistics.png');

export default function Home({navigation}: any) {
  const [deck, setDeck] = useState<string[]>(Object.keys(Deck));
  const [player, setPlayer] = useState<string[]>([]);
  const [dealer, setDealer] = useState<string[]>([]);
  const [wager, setWager] = useState<number>(100);
  const [draw, setDraw] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>('');
  const [waiting, setWaiting] = useState<boolean>(false);

  const drawPlayer = () => {
    if (!(player.length >= 5)) {
      const mutDeck = Shuffle(deck);
      const cards = mutDeck.splice(0, 1);
      const newHand = [...player, cards[0]];
      if (didBust(newHand)) {
        EndRound();
      }
      setPlayer(newHand);
      setDeck([...mutDeck]);
    }
  };

  const drawDealer = useCallback(() => {
    if (!(dealer.length >= 5)) {
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

  function didBust(Hand: string[]) {
    let value = 0;

    for (let i = 0; i < Hand.length; i++) {
      const element = Hand[i];
      const temp = element.split(':')[0];

      if (temp === 'J' || temp === 'Q' || temp === 'K') {
        value += 10;
      } else if (temp === 'A') {
        value += 1;
      } else {
        value += +temp;
      }
    }

    if (value > 21) {
      return true;
    } else {
      return false;
    }
  }

  function EvaluateDealerHand(Hand: string[]) {
    let value = 0;
    let ace = false;
    let i = 0;
    if (winner === '') {
      i++;
    }
    for (i; i < Hand.length; i++) {
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

  const getWinner = useCallback(async () => {
    const playerEvaluatedHand = EvaluateHand(player);
    let playervalue;
    const dealerEvaluatedHand = EvaluateHand(dealer);
    let dealervalue;

    if (playerEvaluatedHand.includes('/')) {
      playervalue = +playerEvaluatedHand.split('/')[1];
    } else {
      playervalue = +playerEvaluatedHand;
    }

    if (dealerEvaluatedHand.includes('/')) {
      dealervalue = +dealerEvaluatedHand.split('/')[1];
    } else {
      dealervalue = +dealerEvaluatedHand;
    }
    if (playervalue <= 21 && (playervalue > dealervalue || dealervalue > 21)) {
      setWinner('Player');

      // if blackjack, update Bjs, otherwise update regular wins
      if (playervalue === 21) {
        const currBjs = storage.getNumber('bjs');
        if (currBjs !== undefined) {
          storage.set('bjs', currBjs + 1);
        } else {
          storage.set('bjs', 1);
        }
      } else {
        const currWins = storage.getNumber('wins');
        if (currWins !== undefined) {
          storage.set('wins', currWins + 1);
        } else {
          storage.set('wins', 1);
        }
      }
    } else if (
      playervalue === dealervalue ||
      (playervalue > 21 && dealervalue > 21)
    ) {
      setWinner('Nobody');
    } else {
      setWinner('Dealer');
      const currLoss = storage.getNumber('losses');
      if (currLoss !== undefined) {
        storage.set('losses', currLoss + 1);
      } else {
        storage.set('losses', 1);
      }
    }
  }, [dealer, player]);

  const EndRound = () => {
    //if before lunch display wait banner
    setWaiting(true);
  };

  const finishGame = () => {
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
    } else {
      getWinner();
    }
  }, [draw, drawDealer, getWinner]);

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
      {waiting ? (
        <Waiting setWaiting={setWaiting} finish={finishGame} />
      ) : (
        <></>
      )}

      <Text style={styles.headerText}>blackjackdle</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
        <Image style={homeStyles.statsIcon} source={statisticIcon} />
      </TouchableOpacity>

      <View style={homeStyles.both}>
        <View style={homeStyles.top}>
          <View style={homeStyles.TextJustifyBetween}>
            <Text style={homeStyles.playerText}>Dealer</Text>
            <Text style={homeStyles.playerText}>
              HandValue: {EvaluateDealerHand(dealer)}
            </Text>
          </View>
          <DealerHand dealer={dealer} winner={winner} />
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
            <CardButton title={'hit'} onClick={() => drawPlayer()} />
            <CardButton
              title={'double'}
              onClick={() => {
                drawPlayer();
                const newWager = wager * 2;
                setWager(newWager);
              }}
            />
            <CardButton title={'stand'} onClick={() => EndRound()} />
          </View>
          <Text style={homeStyles.playerText}>{winner} wins!</Text>
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
    marginTop: 15,
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
  statsIcon: {
    width: 50,
    height: 50,
    margin: 15,
  },
  top: {width: '100%', alignItems: 'center'},
  bottom: {width: '100%', alignItems: 'center', padding: 2},
  both: {
    width: '100%',
    height: '75%',
    justifyContent: 'space-between',
  },
});
