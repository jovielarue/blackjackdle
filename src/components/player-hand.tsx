import {StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './card';

export default function PlayerHand(props: {player: string[]}) {
  return (
    <View style={homeStyles.playerCardsView}>
      {props.player.map(card => {
        return <Card title={card} key={card} />;
      })}
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
