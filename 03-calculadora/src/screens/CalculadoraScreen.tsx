import React from 'react';
import { View, Text } from 'react-native';
import { BotonCal } from '../components/BotonCal';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculadoraScreen = () => {

    const {
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
        calcular } = useCalculator();

    return (
        <View style={styles.calculadoraContainer}>
            {(numeroAnterior !== '0' && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)}
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit

            >{numero}</Text>

            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCal text="C" action={cleanScreen} />
                <BotonCal text="+/-" action={positivoNegativo} />
                <BotonCal text="del" action={delButton} />
                <BotonCal text="/" color="#ff9427" action={btnDividir} />

            </View>
            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCal text="7" action={armarNumero} />
                <BotonCal text="8" action={armarNumero} />
                <BotonCal text="9" action={armarNumero} />
                <BotonCal text="x" color="#ff9427" action={btnMultiplicar} />

            </View>
            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCal text="4" action={armarNumero} />
                <BotonCal text="5" action={armarNumero} />
                <BotonCal text="6" action={armarNumero} />
                <BotonCal text="-" color="#ff9427" action={btnRestar} />

            </View>
            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCal text="1" action={armarNumero} />
                <BotonCal text="2" action={armarNumero} />
                <BotonCal text="3" action={armarNumero} />
                <BotonCal text="+" color="#ff9427" action={btnSumar} />

            </View>
            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCal text="0" action={armarNumero} ancho />
                <BotonCal text="." action={armarNumero} />
                <BotonCal text="=" color="#ff9427" action={calcular} />

            </View>
        </View>

    );
};