import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'setFavoriteIcon', payload: string }
    | { type: 'logout' }
    | { type: 'changeUserName', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return { ...state, isLoggenIn: true, username: 'no username yet' };
        case 'setFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'logout':
            return {
                ...state,
                username: undefined,
                isLoggenIn: false,
                favoriteIcon: undefined,
            };
        case 'changeUserName':
            return {
                ...state,
                username: action.payload,
            };

    }
}