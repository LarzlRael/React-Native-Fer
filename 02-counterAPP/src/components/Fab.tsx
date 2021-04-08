import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'bottonRight' | 'bottonLeft' | 'buttonCenter';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'bottonLeft' }: Props) => {

    const ios = () => {
        return (

            <TouchableOpacity
                style={[styles.fabLocation,
                (position === 'bottonRight') ? styles.right : styles.left,
                ]}
                onPress={onPress}

            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity >

        );
    };

    const android = () => {

        return (<View style={[styles.fabLocation,
        (position === 'bottonRight') ? styles.right : styles.left,
        ]}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback >
        </View>);


    };

    return (Platform.OS === 'ios') ? ios() : android();

};
const styles = StyleSheet.create({
    buttonIncrementar: {
        backgroundColor: 'red',
        borderRadius: 100,
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,

    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    /* floating action button */
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',

        /*  show using
        https://ethercreative.github.io/react-native-shadow-generator/ */
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',

    },
})