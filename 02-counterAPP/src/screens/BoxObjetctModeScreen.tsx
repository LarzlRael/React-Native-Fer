import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjetctModeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola from here</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal: 40,

        fontSize: 14,
        /* width: 150, */
        borderWidth: 10,
        /* backgroundColor: 'red', */

    },
});