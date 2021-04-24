import { useRef } from 'react';

import { Animated, Easing } from 'react-native';


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;


    const fadeIn = () => {

        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();

        Animated.timing(
            position, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.bounce,
        }
        ).start();
    };
    const fadeOut = () => {

        Animated.timing(
            opacity,
            {
                toValue: 0.1,
                duration: 300,
                useNativeDriver: true,

            }
        ).start();
    };
    const startMovingPosition = (initPossition: number = 100, duration: number = 300) => {

        position.setValue(initPossition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,

            }
        ).start();
    };

    return {
        fadeIn,
        fadeOut,
        startMovingPosition,
        opacity,
        position,
    };


};
