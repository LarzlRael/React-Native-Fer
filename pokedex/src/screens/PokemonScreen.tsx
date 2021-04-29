/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hook/usePokemon';
import { PokemonDetalles } from '../components/PokemonDetalles';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }


export const PokemonScreen = ({ navigation, route }: Props) => {

    const { top } = useSafeAreaInsets();
    const { simplePokemon: { id, name, picture }, color } = route.params;

    const { isLoading, pokemon } = usePokemon(id);
    /* console.log(JSON.stringify(pokemon, null, 1)); */
    return (
        <View style={{
            flex: 1,
        }}>
            {/* Header del container */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <TouchableOpacity activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 5,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={35}
                    />
                </TouchableOpacity>

                {/* pokemon name */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 40,
                }}>
                    {name + '\n'}#{id}
                </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />
            </View>


            {/* Detalles y loading */}
            <View style={styles.loadingIndicator}>
                {isLoading ?
                    (<ActivityIndicator
                        color={color}
                        size={50}
                    />)
                    :
                    (<PokemonDetalles pokemon={pokemon} />)
                }

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        /* position: 'absolute',
        left: 20, */
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
