import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/ThemeContext';

export const TextInputScreen = () => {

    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    const { form, isSuscribed, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>

                <View style={styles.globalMargin}>
                    <HeaderTitle title="Text Input" />

                    <TextInput
                        style={{
                            ...stylessScreen.input,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder="Ingrese su nombre"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor={dividerColor}

                    />
                    <TextInput
                        style={{
                            ...stylessScreen.input,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder="Ingrese su email"
                        autoCorrect={false}
                        autoCapitalize="words"
                        keyboardType="email-address"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardAppearance="dark"
                        placeholderTextColor={dividerColor}
                    />
                    <TextInput
                        style={{
                            ...stylessScreen.input,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder="Ingrese su phone"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                        placeholderTextColor={dividerColor}
                    />
                    <HeaderTitle title={JSON.stringify(form, null, 1)} />

                    <View style={stylessScreen.switchRow}>
                        <Text style={{ color: colors.text }}>Suscribirse</Text>
                        <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
                    </View>

                    <TextInput
                        style={{
                            ...stylessScreen.input,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder="Ingrese su phone"

                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                        placeholderTextColor={dividerColor}
                    />


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylessScreen = StyleSheet.create({
    input: {
        borderWidth: 1,

        /* opacity:0.2, */
        height: 50,
        margin: 10,
        paddingHorizontal: 10,
        color: 'black',
        marginVertical: 10,
    }, switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
});

