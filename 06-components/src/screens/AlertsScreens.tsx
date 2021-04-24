import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import prompt from 'react-native-prompt-android';

export const AlertsScreens = () => {


    const showAlert = () => {

        Alert.alert(
            "Titulo",
            "This is the alert messages",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "destructive",
                }, {
                    text: "OK",
                    onPress: () => console.log('ok pressed'),
                    style: "destructive",

                }
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );

    };

    const showPromptAndroid = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View>
            <HeaderTitle title="alerts" />

            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />
            <Button
                title="Mostrar Prompt"
                onPress={showPromptAndroid}
            />
        </View>
    );
};