import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/common-styles';
const blackjackdleLogo = require('./assets/blackjackdle.png');
const statisticIcon = require('./assets/statistics.png');

export default function Login({navigation}) {
  return (
    <View style={[styles.screenView, loginStyles.loginView]}>
      <View style={loginStyles.logoView}>
        <Image style={loginStyles.logoImage} source={blackjackdleLogo} />
        <Text style={styles.headerText}>blackjackdle</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 30, height: 30, margin: 15}}
            source={statisticIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={loginStyles.button}>
        <Text style={loginStyles.buttonText}>Play Today's Blackjackdle</Text>
      </TouchableOpacity>
      <View style={loginStyles.bottomButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HowToPlay')}
          style={loginStyles.button}>
          <Text style={loginStyles.buttonText}>How to Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppInfo')}
          style={loginStyles.button}>
          <Text style={loginStyles.buttonText}>App Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  loginView: {
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  logoView: {
    alignItems: 'center',
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  button: {
    padding: 20,
    elevation: 10,
    borderRadius: 5,
    minWidth: 100,
    backgroundColor: '#F3FADA',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  bottomButtons: {
    gap: 15,
  },
});
