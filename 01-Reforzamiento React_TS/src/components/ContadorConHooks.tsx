
import { useCounter } from '../hooks/useCounter';

export const ContadorConHooks = () => {

    const { valor, acumulate } = useCounter(100);

    return (
        <>
            <h3>contador con hooks</h3>
            <h3>contador: <small>{valor}</small></h3>

            <button
                className="btn btn-primary"
                onClick={() => acumulate(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                onClick={() => acumulate(-1)}
                className="btn btn-primary">
                -1
            </button>
        </>
    )
}
