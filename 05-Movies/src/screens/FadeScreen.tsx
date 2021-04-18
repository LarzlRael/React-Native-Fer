/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */



import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity } = useFade();


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View style={{
                backgroundColor: '#084f6a',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity
            }}>

            </Animated.View>
            <Button
                title="animar"
                onPress={fadeIn}
            />
            <Button
                title="animar"
                onPress={fadeOut}
            />
        </View>
    );
};