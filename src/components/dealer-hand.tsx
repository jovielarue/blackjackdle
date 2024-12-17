import {StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './card';

export default function DealerHand(props: {dealer: string[]; winner: string}) {
  return (
    <View style={homeStyles.playerCardsView}>
      {props.dealer.map((card, index) => {
        return (
          <View key={card}>
            {props.winner === '' && index === 0 ? (
              <>
                <Card title={'back'} />
              </>
            ) : (
              <>
                <Card title={card} />
              </>
            )}
          </View>
        );
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
