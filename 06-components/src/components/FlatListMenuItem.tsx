/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/AppInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/ThemeContext';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext);

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text,
                }}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name="chevron-forward-outline"
                    size={23}
                    color={colors.primary}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19,
    },
});
