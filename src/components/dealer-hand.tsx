import {StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './card';

export default function DealerHand() {
  return (
    <View style={homeStyles.playerCardsView}>
      <Card title="Card" />
      <Card title="Card" />
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
});
