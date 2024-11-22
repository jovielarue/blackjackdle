import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlayScreen from './src/screens/play-screen';
import Login from './src/screens/login';
import HowToPlay from './src/screens/how-to-play';
import AppInfo from './src/screens/app-info';
import StatsScreen from './src/screens/stats-screen';
import {verifyInstallation} from 'nativewind';
import './globals.css';

export default function App() {
  const Stack = createNativeStackNavigator();
  verifyInstallation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} />
        <Stack.Screen name="HowToPlay" component={HowToPlay} />
        <Stack.Screen name="AppInfo" component={AppInfo} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
