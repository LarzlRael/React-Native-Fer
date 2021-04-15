import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';
export const Tab1Screen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Iconos
            </Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" size={40} />
                <TouchableIcon iconName="add-circle-outline" size={40} />
                <TouchableIcon iconName="albums-outline" size={40} />
            </Text>
        </View>
    );
};




