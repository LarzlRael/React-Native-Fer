import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';


import { styles } from '../theme/appTehem';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        });
    }, []);

    return (
        <View style={styles.globalmargin}>
            <Text style={styles.title}>Pagina1 Screen</Text>
            <Button title="Ir a pagina 2 "
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5 }}>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor: '#5856d6' }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}>
                    <Text style={styles.botonGrandeText} >Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor: '#ff9427' }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}>
                    <Text style={styles.botonGrandeText} >Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};