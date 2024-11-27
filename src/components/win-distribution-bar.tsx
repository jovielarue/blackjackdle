import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function WinDistributionBar({number}: {number: number}) {
  const winBarStyles = StyleSheet.create({
    barView: {
      backgroundColor: '#204924',
      borderWidth: 2,
      borderColor: 'white',
      height: '100%',
      minWidth: '7%',
      width: `${number}%`,
      maxWidth: '60%',
      alignItems: 'flex-end',
    },
    barText: {
      color: 'white',
      textAlign: 'right',
      paddingRight: 5,
    },
  });

  return (
    <View style={winBarStyles.barView}>
      <Text style={winBarStyles.barText}>{number}</Text>
    </View>
  );
}
