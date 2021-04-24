import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';

import { useAnimation } from '../hooks/useAnimation';


export const Animation101 = () => {

    const { opacity, position, startMovingPosition, fadeIn, fadeOut } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity: opacity,
                transform: [{
                    translateY: position
                }]
            }} />
            <Button
                title="FadeIN"
                onPress={() => {
                    fadeIn();
                    startMovingPosition(100)
                }}
            />
            <Button
                title="FadeOut"
                onPress={fadeOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
    }
});