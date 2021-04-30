import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hook/useDebounceValue';




interface Props {
    onDebounce: (value: string) => void,
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const { debouncedValue } = useDebounceValue(textValue, 750);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue, onDebounce]);

    return (
        <View style={{
            ...stylesSearchInput.container,
            ...style as any,
        }}>
            <View style={stylesSearchInput.textBackground}>

                <TextInput
                    placeholder="Buscar pokémon"
                    style={stylesSearchInput.textinput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name="search-outline"
                    color="grey"
                    size={30}
                />
            </View>
        </View>
    );
};


const stylesSearchInput = StyleSheet.create({
    container: {
        /* backgroundColor: 'red', */
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textinput: {
        flex: 1,
        fontSize: 18,

        top: 2,
    },
});

