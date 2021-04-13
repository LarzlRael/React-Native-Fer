
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();
    
    return (
        <Drawer.Navigator
            /* drawerPosition="left" */
            drawerType={width >= 700 ? 'permanent' : 'front'}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />

            <Drawer.Screen name="SettingsScreens" component={SettingsScreens} />
        </Drawer.Navigator>
    );
}