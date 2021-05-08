import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './src/navigator/StackNavigator';
import { PermissionsProvider } from './src/context/PermisionContext';


const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  );
};


const App = () => {
  return (
    <AppState >
      <NavigationContainer>
        <NavigatorStack />
      </NavigationContainer>
    </AppState>
  );
};

export default App;
