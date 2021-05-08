import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';



interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

    const { email, password, name, onChange } = useForm({
        email: '',
        password: '',
        name: '',
    });
    const onRegister = () => {
        console.log({ email, password });
        Keyboard.dismiss();
    };
    return (
        <>

            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856d6' }}
                behavior={(Platform.OS) === 'ios' ? 'padding' : 'height'}
            >

                {/* Keyboard avoid view */}
                <View style={loginStyles.formContainer}>
                    <WhiteLogo />

                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                        placeholder="Ingrese su nombre: "
                        placeholderTextColor="rgba(255,255,255,.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={
                            [loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFileIOS]
                        }
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}

                        autoCapitalize="words"
                        autoCorrect={false}
                        onSubmitEditing={onRegister}
                    />

                    <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                        placeholder="Ingrese su email: "
                        placeholderTextColor="rgba(255,255,255,.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={
                            [loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFileIOS]
                        }
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}

                        autoCapitalize="none"
                        autoCorrect={false}
                        onSubmitEditing={onRegister}
                    />

                    <Text style={loginStyles.label}>Contraseña:</Text>
                    <TextInput
                        placeholder="*****"
                        placeholderTextColor="rgba(255,255,255,.4)"
                        secureTextEntry
                        underlineColorAndroid="white"
                        style={
                            [loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFileIOS]
                        }
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onRegister}
                    />

                    {/* Boton Login */}

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}


                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={{


                        }}
                    >
                        <View style={{

                            position: 'absolute'
                        }}>
                            <Text style={loginStyles.buttonText}>Ya tengo cuenta</Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </KeyboardAvoidingView>
        </>
    );
};
