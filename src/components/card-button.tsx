import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PlayingDeck} from './deck';

export default function CardButton(props: {
  onClick: () => void;
  title: string;
}) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.cardView}>
        <Image style={styles.imageStyle} source={PlayingDeck[props.title]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: 50,
    height: 80,
  },

  imageStyle: {height: '100%', width: '120%'},
});
