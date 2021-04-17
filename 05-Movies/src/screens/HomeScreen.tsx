/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';



const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();



    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* <MoviePoster movie={peliculasEnCine[2]} /> */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Peliculas populares */}

                <HorizontalSlider title="Populares" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Up Coming" movies={upComing} />

            </View>
        </ScrollView>
    );
};