import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

export default function CardImage(props: {
  source: string;
  cardStyle: StyleProp<ImageStyle>;
}) {
  const imgSource = require(props.source);
  return <Image source={imgSource} style={props.cardStyle} />;
}
