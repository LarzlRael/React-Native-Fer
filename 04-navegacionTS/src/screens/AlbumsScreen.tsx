import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';


export const AlbumsScreen = () => {

    const { logout, authState } = useContext(AuthContext);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContactScreen
        </Text>
            {authState.isLoggenIn && <Button
                title="Logout"
                onPress={logout}
            />}

        </View>
    );
};