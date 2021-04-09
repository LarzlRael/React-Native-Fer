import { useEffect, useReducer } from 'react'

interface AuthState {

    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;

}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}
type LoginPayload = {
    username: string;
    nombre: string
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }


const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'abc123',
                nombre,
                username
            }

        default:
            return state;
    }
}

export const Login = () => {

    useEffect(() => {

        setTimeout(() => {
            dispatch({
                type: 'logout'
            })
        }, 1500);

    }, [])
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'fernando',
                username: 'ferXD'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }
    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }
    return (
        <div>
            Login

            {(token) ?
                <div className="alert alert-success">Autenticado como:{nombre} </div> :
                <div className="alert alert-danger">No autenticado</div>
            }


            {
                (token) ? (
                    <button
                        onClick={logout}
                        className="btn btn-danger">
                        Logout
                    </button>
                ) : (

                    <button
                        onClick={login}
                        className="btn btn-primary">
                        Login
                    </button>
                )
            }
            {/* buttons */}




        </div>
    )
}
