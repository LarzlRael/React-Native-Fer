
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
/* import { StackNavigator } from './navigator/StackNavigator'; */
/* import { MenuLateralBasico } from './navigator/MenuLateralBasico'; */
import { MenuLateral } from './navigator/MenuLateral';
export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateral />

    </NavigationContainer>
  );
}