import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlackButton } from '../components/BlackButton';

import { PermisionsContext } from '../context/PermisionContext';

export const PermisionScreen = () => {

    const { permisions, askLocationPermisions } = useContext(PermisionsContext);



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Es necesario el uso del GPS para usar esta aplicacion</Text>

            <BlackButton
                title="permiso"
                onPress={askLocationPermisions}
            />
            <Text>{JSON.stringify(permisions, null, 1)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: 200,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    }
});
