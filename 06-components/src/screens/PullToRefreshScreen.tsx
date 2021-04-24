import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';


export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const onRefresh = () => {

        setRefreshing(true);
        setTimeout(() => {
            console.log('terminamos');
            setRefreshing(false);
            setData('hola mundo');
        }, 1500);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856d6"
                    colors={['white', 'red', 'orange']}
                    /* Only for IOS properties */
                    style={{ backgroundColor: '#5856d6' }}
                    tintColor="white"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="PULL to refresh" />

                {data && <HeaderTitle title={data} />}
            </View>
        </ScrollView>
    );
};
