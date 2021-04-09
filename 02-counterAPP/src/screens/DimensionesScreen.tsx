import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

/* const { width, height } = Dimensions.get('window'); */
export const DimensionesScreen = () => {

    // get the dimensions of phone using a hook
    const { width, height } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />

            <Text>width {width.toFixed(0)}, Heigh:{height}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#f0a23b',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    }
});