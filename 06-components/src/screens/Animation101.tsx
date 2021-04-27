import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

import { useAnimation } from '../hooks/useAnimation';


export const Animation101 = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    const { opacity, position, startMovingPosition, fadeIn, fadeOut } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                opacity: opacity,
                transform: [{
                    translateY: position,
                }],
            }} />
            <Button
                color={colors.primary}
                title="FadeIN"
                onPress={() => {
                    fadeIn();
                    startMovingPosition(100);
                }}
            />
            <Button
                color={colors.primary}
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

        width: 150,
        height: 150,
    },
});
