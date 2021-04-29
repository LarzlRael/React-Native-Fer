import React from 'react';
import { Image, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginator } from '../hook/usePokemonPaginator';
import { FlatList } from 'react-native-gesture-handler';

import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons, isLoading } = usePokemonPaginator();


    return (
        <>

            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <PokemonCard pokemon={item} />
                    )}


                    // infinte scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={
                        <ActivityIndicator style={{
                            height: 100,
                        }}
                            size={20}
                            color='grey' />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {/* <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
                Pokédex
            </Text> */}
        </>
    );
};
