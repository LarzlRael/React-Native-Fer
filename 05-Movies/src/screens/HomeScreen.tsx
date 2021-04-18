/* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackGround } from '../components/GradientBackGround';

import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const { setMainColors } = useContext(GradientContext);

    const getPostersColors = async (index: number) => {
        const movie = nowPlaying[index];
        const URI = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] = await getImageColors(URI);

        setMainColors({ primary, secondary });

    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPostersColors(0);
        }
    }, [nowPlaying]);

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }







    return (
        <GradientBackGround childen={

            <ScrollView>

                <View style={{ marginTop: top + 20 }} >
                    {/* <MoviePoster movie={peliculasEnCine[2]} /> */}
                    <View style={{ height: 440}} >
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPostersColors(index)}
                        />
                    </View>

                    {/* Peliculas populares */}

                    <HorizontalSlider title="Populares" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Up Coming" movies={upComing} />

                </View>
            </ScrollView>
        } />



    );
};


