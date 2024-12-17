import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Deck} from './deck';

export default function Card(props: {title: string}) {
  return (
    <View style={styles.cardView}>
      <Image style={styles.imageStyle} source={Deck[props.title]} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: 50,
    height: 80,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
  },
  cardImg: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {height: '100%', width: '120%'},
});
