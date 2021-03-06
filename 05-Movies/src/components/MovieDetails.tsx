/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import currencyFormatter from 'currency-formatter';

import { View, Text } from 'react-native';
import { MovieFull } from '../interfaces/MovieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActorItems } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="gray"
                        size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
                </View>

                {/* Film history */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>
                <Text style={{ fontSize: 16, textAlign: 'justify' }}>{movieFull.overview}</Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>
                <Text style={{ fontSize: 18 }} >{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
            </View>
            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100, }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, }}>Actores</Text>


                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ActorItems actor={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />

            </View>
        </>
    );
};