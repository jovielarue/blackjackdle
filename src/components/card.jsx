import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Card() {
  return (
    <View style={styles.cardView}>
      <Text>card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: 50,
    height: 80,
    backgroundColor: 'pink',
  },
});
