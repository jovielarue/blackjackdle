import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from './styles/common-styles';
import WinDistributionBar from './components/win-distribution-bar';
import {storage} from './storage';

export default function HowToPlay() {
  const [wins, setWins] = useState();
  const [losses, setLosses] = useState();
  const [bjs, setBjs] = useState();

  useEffect(() => {
    getStats();
  });

  const getStats = () => {
    setWins(storage.getNumber('wins'));
    setLosses(storage.getNumber('losses'));
    setBjs(storage.getNumber('bjs'));
  };
  return (
    <View style={styles.screenView}>
      <Text style={styles.headerText}>blackjackdle</Text>
      <View style={statsStyles.overviewWrapper}>
        <Text style={statsStyles.subHeading}>Statistics</Text>
        <View style={statsStyles.overview}>
          <View style={statsStyles.overviewSection}>
            <Text style={statsStyles.overviewText}>{wins + losses}</Text>
            <Text style={statsStyles.smallOverviewText}>played</Text>
          </View>
          <View style={statsStyles.overviewSection}>
            <Text style={statsStyles.overviewText}>
              {Math.floor((wins / (wins + losses)) * 100)}
            </Text>
            <Text style={statsStyles.smallOverviewText}>win %</Text>
          </View>
          <View style={statsStyles.overviewSection}>
            <Text style={statsStyles.overviewText}>{wins}</Text>
            <Text style={statsStyles.smallOverviewText}>
              current win streak
            </Text>
          </View>
          <View style={statsStyles.overviewSection}>
            <Text style={statsStyles.overviewText}>{wins * 2}</Text>
            <Text style={statsStyles.smallOverviewText}>max win streak</Text>
          </View>
        </View>
      </View>
      <View style={statsStyles.winWrapper}>
        <Text style={statsStyles.subHeading}>Win Distribution</Text>
        <View style={statsStyles.winDistribution}>
          <View style={statsStyles.winSection}>
            <Text style={statsStyles.smallWinText}>Blackjacks:</Text>
            <WinDistributionBar number={bjs} />
          </View>
          <View style={statsStyles.winSection}>
            <Text style={statsStyles.smallWinText}>Double wins:</Text>
            <WinDistributionBar number={wins * 2} />
          </View>
          <View style={statsStyles.winSection}>
            <Text style={statsStyles.smallWinText}>Regular wins:</Text>
            <WinDistributionBar number={wins} />
          </View>
          <View style={statsStyles.winSection}>
            <Text style={statsStyles.smallWinText}>Regular losses:</Text>
            <WinDistributionBar number={losses} />
          </View>
          <View style={statsStyles.winSection}>
            <Text style={statsStyles.smallWinText}>Double losses:</Text>
            <WinDistributionBar number={losses * 2} />
          </View>
        </View>
      </View>
    </View>
  );
}

const statsStyles = StyleSheet.create({
  subHeading: {
    fontSize: 20,
    fontWeight: 500,
    textShadowColor: 'beige',
    textShadowRadius: 5,
    color: 'white',
  },
  overviewWrapper: {
    gap: 10,
    margin: 25,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  overview: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  overviewSection: {
    alignItems: 'center',
    width: '20%',
  },
  overviewText: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  smallOverviewText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  smallWinText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
    width: 125,
  },
  winWrapper: {
    gap: 25,
    padding: 35,
    width: '100%',
    alignItems: 'center',
  },
  winDistribution: {
    gap: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  winSection: {
    width: '100%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 15,
  },
});
