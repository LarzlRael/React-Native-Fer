import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    style?: StyleProp<ViewStyle>;
    size?: number;
    onPress: () => void;
}

export const Fab = ({ iconName, onPress, style, size = 30 }: Props) => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Icon
                    name={iconName}
                    color="white"
                    size={size}
                    style={{ left: 1 }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
});
