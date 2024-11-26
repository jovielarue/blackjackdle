import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles/common-styles';

export default function HowToPlay() {
  return (
    <View style={styles.screenView}>
      <Text style={styles.subHeading}>App Info</Text>
      <Text style={styles.headerText}>blackjackdle</Text>
      <View style={styles.explanation}>
        <Text style={styles.explanationText}>
          This app was made by Adam Cunard and Jovie LaRue. This app was made
          for CPRG-303, Mobile Application Development class at SAIT. All rights
          reserved to us. We have zero understanding of the legal implications
          in making this app. By using this app you agree not to sue or press
          any charges whatsoever.
        </Text>
      </View>
    </View>
  );
}
