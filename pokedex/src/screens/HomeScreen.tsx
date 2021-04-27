import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginator } from '../hook/usePokemonPaginator';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    usePokemonPaginator();
    return (
        <>

            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
                Pokédex
            </Text>
        </>
    );
};