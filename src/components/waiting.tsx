import {Dispatch, SetStateAction} from 'react';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Waiting(props: {
  setWaiting: Dispatch<SetStateAction<boolean>>;
  finish: () => void;
}) {
  const handleClick = () => {
    props.setWaiting(false);
    props.finish();
  };
  return (
    <TouchableOpacity style={waitingStyles.Waitbox} onPress={handleClick}>
      <Text style={waitingStyles.WaitText}>
        Come back at lunchtime to see how you did!
      </Text>
      <Text style={waitingStyles.WaitText}>
        (for testing purposes press this window to skip to lunch)
      </Text>
    </TouchableOpacity>
  );
}

const waitingStyles = StyleSheet.create({
  Waitbox: {
    position: 'absolute',
    top: '25%',
    zIndex: 100,
    width: '80%',
    height: '30%',
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  WaitText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});
