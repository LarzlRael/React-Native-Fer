import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string,
    size?: number
}

export const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext);
    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}
        >
            <Icon
                name={iconName}
                size={40}
                color={colors.primary} />
                
        </TouchableOpacity>
    );
};