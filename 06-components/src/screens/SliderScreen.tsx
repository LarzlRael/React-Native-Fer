/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, ImageSourcePropType, SafeAreaView, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/ThemeContext';


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType,
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

const { width } = Dimensions.get('window');

export const SliderScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    const [activeIndex, setActiveIndex] = useState(0);
    const { fadeIn, opacity } = useAnimation();

    const navigation = useNavigation();
    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />

                <Text style={{ ...styles.title, color: colors.text }}>{item.title}</Text>
                <Text style={{ ...styles.subTitle, color: colors.text }}>{item.desc}</Text>


            </View>
        );
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 40,
            }}
        >
            <Carousel
                /* ref={(c) => { this._carousel = c; }} */
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={width}
                itemWidth={width}
                overScrollMode="always"
                removeClippedSubviews={false}
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if (index === items.length - 1) {
                        fadeIn();
                    }
                }}
                layout="default"

            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                alignItems: 'center',

            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                    }}
                />

                {activeIndex === items.length - 1 &&
                    <Animated.View
                        style={{
                            opacity,
                        }}>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: colors.primary,
                                width: 130,
                                height: 50,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('HomeScreen')}
                        >
                            <Text style={{
                                fontSize: 20,
                                color: 'white',
                            }} >
                                Entrar
                            </Text>

                            <Icon
                                name="chevron-forward-outline"
                                color="white"
                                size={25}
                            />
                        </TouchableOpacity>

                    </Animated.View>
                }

            </View>
        </SafeAreaView >
    );
};




const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856d6',
    },
    subTitle: {
        fontSize: 16,

    },
});
