import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

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
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';


const Stack = createStackNavigator();


export const Navigator = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <NavigationContainer
                theme={theme}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                        },
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
                    <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

