import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles } from '../theme/appTehem';
export const Tab1Screen = () => {
    return (
        <View style={styles.globalmargin}>
            <Text style={styles.title}>
                Iconos
            </Text>
            <Text>
                <Icon name="airplane-outline" size={40} color="#900" />
                <Icon name="add-circle-outline" size={40} color="#900" />
                <Icon name="albums-outline" size={40} color="#900" />
            </Text>
        </View>
    );
};




