/* eslint-disable react-native/no-inline-styles */

import React from 'react';



import { ChatScreen } from '../screens/ChatScreen';
import { ContantsScreen } from '../screens/ContantsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTehem';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    /* hook to safe area */
    const { top: paddingTop } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{
                paddingTop,

            }}
            sceneContainerStyle={{
                backgroundColor: 'white',

            }}
            tabBarOptions={{
                pressColor: colors.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colors.primary,
                },
                style: {
                    borderTopColor: colors.primary,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
            }}

            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName: string = '';
                        switch (route.name) {
                            case 'ChatScreen':
                                iconName = 'chatbox-ellipses-outline';
                                break;
                            case 'ContantsScreen':
                                iconName = 'people-outline';
                                break;
                            case 'AlbumsScreen':
                                iconName = 'albums-outline';
                                break;

                            default:
                                break;
                        }
                        return <Icon name={iconName} size={20} color={color} />;
                    },
                })
            }
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContantsScreen" component={ContantsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}