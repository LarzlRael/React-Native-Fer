import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface PropsButtonCal {
    text: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void;
}

export const BotonCal = ({ action, text, color = '#2d2d2d', ancho = false }: PropsButtonCal) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: (ancho) ? 180 : 80
                }}
            >
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9b9b9b'
                        ? 'black'
                        : 'white'),
                }}>{text}</Text>
            </View>
        </TouchableOpacity >
    );
};