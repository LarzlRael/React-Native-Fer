import  { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculator = () => {

    const [numero, setNumero] =
        useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const cleanScreen = () => {
        setNumero('0');
        setnumeroAnterior('0');
    };


    const positivoNegativo = () => {

        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    };

    const delButton = () => {
        let negativo = '';
        let numerTempo = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numerTempo = numero.substr(1);
        }

        if (numerTempo.length > 1) {
            setNumero(negativo + numerTempo.slice(0, -1));
        } else {
            setNumero('0');
        }
    };

    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1));
        } else {
            setnumeroAnterior(numero);
        }

        setNumero('0');


    };

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };
    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };
    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };
    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    };


    const armarNumero = (numeroText: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroText === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // Punto decimal

            if (numeroText === '.') {
                setNumero(numero + numeroText);

                // evaluar si es otro cero, y hay un punto
            } else if (numeroText === '0' && numero.includes('.')) {
                setNumero(numero + numeroText);

                // evaluar si es diferente de 0 u no tiene un punto
            } else if (numeroText !== '0' && !numero.includes('.')) {
                setNumero(numeroText);
                // evitar el 0000.0
            } else if (numeroText === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroText);
            }

        } else {

            setNumero(numero + numeroText);
        }

        //
    };

    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;

            case Operadores.restar:

                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }
        setnumeroAnterior('0');
    };
    return {
        numero,
        numeroAnterior,

        cleanScreen,
        positivoNegativo,
        delButton,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        armarNumero,
        calcular,

    };
};