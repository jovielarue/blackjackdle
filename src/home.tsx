import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/common-styles';
import CardButton from './components/card-button';
import DealerHand from './components/dealer-hand';
import PlayerHand from './components/player-hand';
import {Deck} from './components/deck';

export default function Home() {
  const [deck, setDeck] = useState<string[]>(Object.keys(Deck));
  const [player, setPlayer] = useState<string[]>([]);
  const [dealer, setDealer] = useState<string[]>([]);

  const start = () => {
    const mutDeck = Shuffle(deck);
    const cards = mutDeck.splice(0, 4);

    setPlayer([...player, cards[0], cards[2]]);

    setDealer([...dealer, cards[1], cards[3]]);

    setDeck([...mutDeck]);
  };

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
  return (
    <View style={styles.screenView}>
      <Text style={styles.headerText}>blackjackdle</Text>
      <TouchableOpacity>
        <Text>stats icon goes here</Text>
      </TouchableOpacity>

      <View style={homeStyles.both}>
        <View style={homeStyles.top}>
          {/* Component these 2 */}
          <Text style={homeStyles.playerText}>Dealer</Text>
          <DealerHand dealer={dealer} />
          <Text style={homeStyles.playerText}>
            -- Dealer hits on soft 17 --
          </Text>

          <Text style={homeStyles.playerText}>You</Text>
          <PlayerHand player={player} />
        </View>

        <View style={homeStyles.bottom}>
          <View style={homeStyles.actionCardsView}>
            <CardButton title={'Hit'} onClick={() => console.log('Hit')} />
            <CardButton
              title={'Double'}
              onClick={() => console.log('Double')}
            />
            <CardButton title={'Stand'} onClick={() => console.log('Stand')} />
          </View>
          <Button title="Start" onPress={start} />
        </View>
      </View>
    </View>
  );
}

const homeStyles = StyleSheet.create({
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
  both: {width: '100%', height: '100%', gap: '40%'},
});
