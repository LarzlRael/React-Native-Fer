import React from 'react';
import { View, StyleSheet } from 'react-native';
export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaVerde} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* alignItems: 'center',
        justifyContent: 'center', */

        backgroundColor: '#28c4d9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        top:0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom:0,
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom:0,
    },
})

/* postion:'absolute'
    right: 0,
    bottom:0,
    left:0,
    right:0
    is iqual to = ...StyleSheet.absoluteFillObject
*/