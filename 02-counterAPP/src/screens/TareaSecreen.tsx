import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaSecreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        /* flexDirection: 'row', */
        justifyContent: 'space-between',



    },
    cajaMorada: {
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
    },
    cajaNaranja: {
        flex: 2,
        flexShrink: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#f0a23b',
    },
    cajaAzul: {
        flex: 4,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28c4d9',

    },

});