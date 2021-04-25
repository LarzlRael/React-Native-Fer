import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';
import { Animation101 } from '../screens/Animation101';
import { Animation102 } from '../screens/Animation102';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertsScreens } from '../screens/AlertsScreens';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SliderScreen } from '../screens/SliderScreen';

const Stack = createStackNavigator();


export const Navigator = () => {


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreens} />
            <Stack.Screen name="Animation101" component={Animation101} />
            <Stack.Screen name="Animation102" component={Animation102} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertsScreen" component={AlertsScreens} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
            <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
            <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
            <Stack.Screen name="SliderScreen" component={SliderScreen} />

        </Stack.Navigator>
    );
};

