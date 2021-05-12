import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';

import { Navigator } from './src/navigator/Navigator';

const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};



const App = () => {
  return (

    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};
export default App;
