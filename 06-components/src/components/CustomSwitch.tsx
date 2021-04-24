import React from 'react';
import { Switch, Platform } from 'react-native';
import { useState } from 'react';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ onChange, isOn }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: '#D9d9db', true: '#5856d6' }}
            thumbColor={(Platform.OS === 'android') ? '#5856d6' : ''}
            /* ios_backgroundColor="#3e3e3e" */
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
