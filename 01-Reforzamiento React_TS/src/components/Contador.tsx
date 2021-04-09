import React, { useState } from 'react'

export const Contador = () => {

    const [valor, setValor] = useState<number>(0);

    const acumulate = (numero: number) => {

        setValor(valor + numero);
    }

    return (
        <>
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
