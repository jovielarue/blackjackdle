import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/home';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import AppInfo from './src/app-info';
import Login from './src/login';
import Stats from './src/stats';
import HowToPlay from './src/how-to-play';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.mainView}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2B6030',
            },
            headerTintColor: '#FFFFFF',
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Home',
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Play',
            }}
          />
          <Stack.Screen
            name="Stats"
            component={Stats}
            options={{
              title: 'Your Stats',
            }}
          />
          <Stack.Screen
            name="HowToPlay"
            component={HowToPlay}
            options={{
              title: 'How to Play',
            }}
          />
          <Stack.Screen
            name="AppInfo"
            component={AppInfo}
            options={{
              title: 'App Info',
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
});
