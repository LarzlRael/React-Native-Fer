
// define how it look, what information I will have here

import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggenIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Initial State
export const AuthInitialState: AuthState = {
    isLoggenIn: false,
}


// we will use to tell react how it looks and what show in the context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (payload: string) => void;
    logout: () => void;
    changeUserName: (name: string) => void;
}

// create the context
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {


    const [authState, dispatch] = useReducer(authReducer, AuthInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const changeUserName = (name: string) => {
        dispatch({ type: 'changeUserName', payload: name });
    };

    const changeFavoriteIcon = (payload: string) => {
        dispatch({ type: 'setFavoriteIcon', payload });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUserName,
        }}>
            {children}
        </AuthContext.Provider>
    );
}