/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Platform, FlatList, Text, ActivityIndicator, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hook/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/appTheme';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';



const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFeching, simplePokemonList } = usePokemonSearch();

    const [termSearch, setTermSearch] = useState('');


    const [pokemonFIltered, setPokemonFIltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {

        if (termSearch.length === 0) {
            return setPokemonFIltered([]);
        }

        if (isNaN(Number(termSearch))) {
            setPokemonFIltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLowerCase()
                        .includes(termSearch.toLowerCase())));
        } else {
            /* setPokemonFIltered(
                [simplePokemonList.find((poke) => poke.id === termSearch)!]
            ); */
            const pokemonId = simplePokemonList.find((poke) => poke.id === termSearch);
            setPokemonFIltered(pokemonId ? [pokemonId] : []);
        }

    }, [simplePokemonList, termSearch]);

    if (isFeching) {
        return (
            <Loading />
        );
    }

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
        }}>

            <SearchInput
                onDebounce={(value) => setTermSearch(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: Platform.OS === 'ios' ? top : top + 30,
                }}
            />


            <FlatList
                data={pokemonFIltered}
                keyExtractor={(pokemon) => pokemon.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}

                // header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        marginBottom: 10,
                        marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
                    }}> {termSearch}</Text>
                )}


                // infinte scroll

                onEndReachedThreshold={0.4}

                /*  ListFooterComponent={
                     <ActivityIndicator style={{
                         height: 100,
                     }}
                         size={20}
                         color="grey" />} */
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
            { isFeching && <ActivityIndicator style={{
                height: 100,
            }}
                size={20}
                color="grey" />}
        </View>
    );
};
