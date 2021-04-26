

import React, { useContext } from 'react';
import { View, Text, SectionList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin',]
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman',]
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama',]
    },
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin',]
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman',]
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama',]
    },
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin',]
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman',]
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama',]
    },
];

export const CustomSectionListScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={casas}

                ListHeaderComponent={() => <HeaderTitle title="Section List" />}

                ListFooterComponent={() =>
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitle title={'total de casas: ' + casas.length} />
                    </View>
                }

                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                SectionSeparatorComponent={() => <ItemSeparator />}
                /* ItemSeparatorComponent={()=><ItemSeparator />} */

                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};