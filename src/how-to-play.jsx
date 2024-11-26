import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from './styles/common-styles';

export default function HowToPlay() {
  return (
    <View style={styles.screenView}>
      <Text style={styles.subHeading}>How to Play</Text>
      <Text style={styles.headerText}>blackjackdle</Text>
      <View style={styles.explanation}>
        <Text style={styles.explanationText}>
          Blackjackdle is a daily Blackjack game! Every day, open the app and
          play the same hand of Blackjack as thousands of players around the
          world are playing. Rules of Blackjack: Your goal is to get your hand
          closer to a total of 21 than the dealer. To do this, draw cards
          (‘hit’) to increase your hand’s total. Aces are worth either 1 or 11
          points (whichever gets your hand closer -- but not over! -- 21). 10s
          and all face cards are worth 10. If your total goes over 21, you BUST!
          If either player gets a total of exactly 21, that is a BLACKJACK! You
          can ‘stand’ at any point to signal that you are done picking up cards.
          The dealer will then flip over their face-down card and whoever’s hand
          is closest to 21 wins the round! You can ‘double’ to double your bet,
          get a new card, and automatically stand. If you win on a double, you
          add TWO to your winning streak -- otherwise, a regular win just adds
          ONE! Have fun playing Blackjackdle!
        </Text>
      </View>
    </View>
  );
}
