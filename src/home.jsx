import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/common-styles';
import CardButton from './components/card-button';
import DealerHand from './components/dealer-hand';
import PlayerHand from './components/player-hand';

export default function Home() {
  const [player, setPlayer] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [deck, setDeck] = useState([]);

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
