
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
/* import { StackNavigator } from './navigator/StackNavigator'; */
/* import { MenuLateralBasico } from './navigator/MenuLateralBasico'; */
import { MenuLateral } from './navigator/MenuLateral';
import { AuthProvider } from './context/AuthContext';


export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}