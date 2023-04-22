import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  DefaultTheme,
  MD3LightTheme,
  MD3Theme,
  Provider as PaperProvider,
} from 'react-native-paper';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './src/screens/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter title={'Count'} initialCount={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
