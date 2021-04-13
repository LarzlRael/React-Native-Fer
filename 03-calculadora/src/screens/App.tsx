import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../theme/appTheme';
import { CalculadoraScreen } from './CalculadoraScreen';
export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};