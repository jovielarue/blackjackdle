import {View, Text} from 'react-native';
import React from 'react';

export default function Banner(text: string) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
