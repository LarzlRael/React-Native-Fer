import React, { useContext } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
export const SettingsScreens = () => {

    const { authState } = useContext(AuthContext);
    const insets = useSafeAreaInsets();

    return (
        <View style={{ margin: insets.top, ...styles.globalMargin }}>
            <Text style={styles.title}>
                Settings screen
            </Text>
            <Text style={styles.title}>
                {JSON.stringify(authState, null, 1)}
            </Text>

            {
                authState.favoriteIcon && (<Icon
                    name={authState.favoriteIcon}
                    size={60}
                    color={colors.primary} />)
            }

        </View>
    );
};