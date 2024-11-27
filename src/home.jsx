import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles/common-styles';
import Card from './components/card';
const statisticIcon = require('./assets/statistics.png');

export default function Home({navigation}) {
  return (
    <View style={styles.screenView}>
      <Text style={styles.headerText}>blackjackdle</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
        <Image source={statisticIcon} />
      </TouchableOpacity>

      <View>
        <Text style={homeStyles.playerText}>Dealer</Text>
        <View style={homeStyles.playerCardsWrapper}>
          <View style={homeStyles.playerCardsView}>
            <Card />
            <Card />
          </View>
        </View>
        <Text style={homeStyles.playerText}>-- Dealer hits on soft 17 --</Text>
        <Text style={homeStyles.playerText}>You</Text>
        <View style={homeStyles.playerCardsWrapper}>
          <View style={homeStyles.playerCardsView}>
            <Card />
            <Card />
          </View>
        </View>
        <View style={homeStyles.actionCardsView}>
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </View>
  );
}

const homeStyles = {
  playerCardsWrapper: {
    width: '100%',
    height: 150,
    borderColor: 'white',
    borderWidth: 5,
  },
  playerCardsView: {
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
  },
  playerText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
  },
  actionCardsView: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
  },
};
