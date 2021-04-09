import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaSecreen } from './src/screens/TareaSecreen';
/* import { FlexScreen } from './src/screens/FlexScreen'; */
/* import { ContadorScreen } from './src/screens/ContadorScreen'; */

/* import { HolaMundoScreen } from './src/screens/HolaMundoScreen'; */
/* import { BoxObjetctModeScreen } from './src/screens/BoxObjetctModeScreen';*/
/* import { DimensionesScreen } from './src/screens/DimensionesScreen'; */
/* import { PositionScreen } from './src/screens/PositionScreen'; */

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaSecreen />
    </SafeAreaView>
  );
};

export default App;
