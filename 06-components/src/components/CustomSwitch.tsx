import React, { useContext } from 'react';
import { Switch, Platform } from 'react-native';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ onChange, isOn }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: '#D9d9db', true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            /* ios_backgroundColor="#3e3e3e" */
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
