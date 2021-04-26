/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ModalScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />
            <Button
                title="Abrir Modal"
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}

            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor: colors.background,
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 4,
                        borderRadius: 5,
                        /* borderColor: colors.text, */
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: colors.text,
                        }}>Modal</Text>

                        <Text style={{

                            fontSize: 16,
                            fontWeight: '300',
                            color: colors.text,

                        }}>Cuerpo del modal</Text>

                        <Button
                            title="Cerrar el modal"
                            onPress={() => setIsVisible(false)}
                        />

                    </View>
                </View>
            </Modal>
        </View>
    );
};
