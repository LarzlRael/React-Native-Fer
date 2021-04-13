
import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { useWindowDimensions, Image, View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../theme/appTehem';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            /* drawerPosition="left" */
            drawerType={width >= 700 ? 'permanent' : 'front'}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            {/* Just can be screens */}
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreens" component={SettingsScreens} />
        </Drawer.Navigator>
    );
}

export const MenuInterno =
    ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

        return (
            <DrawerContentScrollView>
                <View style={styles.avatarContainer}>
                    <Image source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                    }}
                        style={styles.avatar}
                    />
                </View>
                {/* Opciones de menu */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={styles.menuBottom}
                        onPress={() => navigation.navigate('StackNavigator')}
                        >
                        <Text style={styles.menuTexto}>Navegacion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuBottom}
                        onPress={() => navigation.navigate('SettingsScreens')}
                        >
                        <Text style={styles.menuTexto}>Ajustes </Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        );
    }
