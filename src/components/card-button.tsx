import React from 'react';
import {TouchableOpacity} from 'react-native';
import Card from './card';

export default function CardButton(props: {
  onClick: () => void;
  title: string;
}) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Card title={props.title} />
    </TouchableOpacity>
  );
}
