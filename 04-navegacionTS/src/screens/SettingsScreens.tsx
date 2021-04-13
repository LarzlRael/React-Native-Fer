import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTehem';
export const SettingsScreens = () => {

    const insets = useSafeAreaInsets()
    return (
        <View style={{ margin: insets.top, ...styles.globalmargin }}>
            <Text style={styles.title}>
                Settings screen
            </Text>
        </View>
    );
};