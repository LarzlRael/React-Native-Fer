import ImageColors from 'react-native-image-colors';

export const getImageColors = async (URI: string) => {

    const colors = await ImageColors.getColors(URI, {});
    let primary;
    let secondary;

    if (colors.platform === 'android') {
        // Access android properties
        primary = colors.dominant;
        secondary = colors.average;

    } else {
        primary = colors.primary;
        secondary = colors.secondary;
    }

    return [primary, secondary];
};