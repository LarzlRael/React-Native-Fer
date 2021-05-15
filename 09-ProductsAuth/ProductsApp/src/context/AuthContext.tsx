import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import cafeApi from '../api/cafeApi';
import { CreadoPor, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: CreadoPor | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    singUp: (obj: RegisterData) => void;
    singIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const AuthInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, AuthInitialState);

    useEffect(() => {
        checkToken();

    }, []);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');

        // if there is not token
        if (!token) return dispatch({ type: 'noAuthenticated' });

        // There is token:

        const resp = await cafeApi.get<LoginResponse>('/auth');
        if (resp.status !== 200) {
            return dispatch({ type: 'noAuthenticated' });
        }

        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                usuario: resp.data.usuario,
            },
        });
    };



    const singIn = async ({ correo, password }: LoginData) => {
        try {
            const { data } = await cafeApi.post<LoginResponse>('/auth/login', {
                correo, password,
            });

            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    usuario: data.usuario,
                },
            });
            await AsyncStorage.setItem('token', data.token);


        } catch (error) {

            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Informacion incorrecta',
            });
        }

    };

    const singUp = async ({ nombre, correo, password }: RegisterData) => {

        try {
            const { data } = await cafeApi.post<LoginResponse>('/usuarios', {
                correo, password, nombre,
            });

            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    usuario: data.usuario,
                },
            });
            await AsyncStorage.setItem('token', data.token);


        } catch (error) {

            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'El correo ya está registrado',
            });
        }

    };

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });

    };
    const removeError = () => {
        dispatch({
            type: 'removeError',
        });

    };


    return (
        <AuthContext.Provider value={{
            singUp,
            singIn,
            logOut,
            removeError,
            ...state,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
