import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../pages/MapScreen';
import { PermisionScreen } from '../pages/PermisionScreen';
import { LoadingScreen } from '../pages/LoadingScreen';

import { PermisionsContext } from '../context/PermisionContext';

const Stack = createStackNavigator();

export const NavigatorStack = () => {
    const { permisions } = useContext(PermisionsContext);

    if (permisions.locationStatus === 'unavailable') {
        return (<LoadingScreen />);
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            {
                (permisions.locationStatus === 'granted')
                    ?
                    <Stack.Screen name="MapScreen" component={MapScreen} />
                    :

                    <Stack.Screen name="PermisionScreen" component=
                        {PermisionScreen} />
            }



        </Stack.Navigator>
    );
};
