/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
export const ItemSeparator = () => {

    const { theme: { dividerColor } } = useContext(ThemeContext)

    return (
        <View style={{
            borderBottomWidth: 1,
            marginVertical: 8,
            opacity: 0.4,
            borderBottomColor: dividerColor,

        }} />
    );
};
