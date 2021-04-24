/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';

export const ModalScreen = () => {

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
                        backgroundColor: 'white',
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
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Modal</Text>

                        <Text style={{

                            fontSize: 16,
                            fontWeight: '300',

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
