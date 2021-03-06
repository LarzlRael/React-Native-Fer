import { CreadoPor } from '../interfaces/appInterfaces';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: CreadoPor | null;
}

type AuthAction =
    | { type: 'signUp', payload: { token: string, usuario: CreadoPor } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'noAuthenticated' }
    | { type: 'logout' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'addError':

            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                errorMessage: action.payload,
            };
        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            };
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.usuario,
            };

        case 'logout':
        case 'noAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null,
            };



        default:
            return state;
    }


}
