/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

            {/* <Button title="Click"
                onPress={() => setcontador(contador + 1)}
            /> */}
            {/* Use styles in buttons using the TouchableOpacity */}

            <Fab
                title="+1"
                onPress={() => setcontador(contador + 1)}
                position="bottonRight"
            />

            <Fab
                title="-1"
                onPress={() => setcontador(contador - 1)}
                position="bottonLeft"
            />
            {/* <Fab
                title="reset"
                onPress={() => setcontador(0)}
                position="buttonCenter"
            /> */}

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15,
    },
});
