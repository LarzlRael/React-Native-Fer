import React from 'react';

import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/ThemeContext';

/* const customTHeme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: '#282C34',
  },

}; */

export const App = () => {
  return (
    <AppState>

      <Navigator />

    </AppState>
  );




};

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider >
      {children}
    </ThemeProvider>
  )
}