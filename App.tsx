import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/assets/styles/colors';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
