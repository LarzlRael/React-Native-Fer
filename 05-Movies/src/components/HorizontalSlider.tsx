/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Movie } from '../interfaces/movieInterfaces';
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {

    return (
        <View style={{ height: (title) ? 260 : 220 }} >
            {/* Peliculas populares */}
            {title && <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginBottom:15,
                }}>{title}</Text>}

            <FlatList
                data={movies}
                renderItem={({ item }: any) =>
                    (<MoviePoster movie={item} width={140} height={200} />)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View >
    )
}
