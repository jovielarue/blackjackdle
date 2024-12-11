import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Card(props: {title: string}) {
  return (
    <View style={styles.cardView}>
      <Text style={styles.cardText}>{props.title}</Text>
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
