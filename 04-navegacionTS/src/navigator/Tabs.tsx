
import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
/* import { Tab2Screen } from '../screens/Tab2Screen'; */
/* import { Tab3Screen } from '../screens/Tab3Screen'; */
import { StackNavigator } from './StackNavigator';
import { TopTabNavigator } from './TopTabNagitator';
import { colors } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabIOS = createBottomTabNavigator();

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            // eslint-disable-next-line react-native/no-inline-styles
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            tabBarOptions={{
                activeTintColor: colors.primary,
                style: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                labelStyle: {
                    fontSize: 15,
                },
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color }) => {

                        let iconName: string = '';

                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'T1';
                                break;
                            case 'Tab2Screen':
                                iconName = 'T2';
                                break;
                            case 'StackNavigator':
                                iconName = 'sT';
                                break;

                        }
                        return <Icon name="airplane-outline" size={40} color={color} />;
                    },
                })
            }
        >

            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />

        </BottomTabIOS.Navigator>
    );

};


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled
            barStyle={{
                backgroundColor: colors.primary,
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color }) => {

                        let iconName: string = '';

                        switch (route.name) {
                            case 'Tab1Screen':
                                iconName = 'bandage-outline';
                                break;
                            case 'Tab2Screen':
                                iconName = 'basketball-outline';
                                break;
                            case 'StackNavigator':
                                iconName = 'bookmarks-outline';
                                break;

                        }
                        return <Icon name={iconName} size={20} color={color} />;
                    },
                })
            }
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
};