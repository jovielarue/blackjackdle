import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CardImage from './card-image';

export default function Card(props: {title: string}) {
  const value = props.title.split(':')[0];
  const suite = props.title.split(':')[1];

  let cardFileName;
  let cardImg;
  if (value.length === 1 && suite.length === 1) {
    cardFileName = '../assets/cards/' + value + '-' + suite + '.png';
    console.log(cardFileName);
  }

  return (
    <View style={styles.cardView}>
      {cardFileName === undefined || cardImg === undefined ? (
        <Text style={styles.cardText}>{props.title}</Text>
      ) : (
        <CardImage source={cardFileName} cardStyle={styles.cardImg} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: 50,
    height: 80,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
  },
  cardImg: {
    width: '100%',
    height: '100%',
  },
});
