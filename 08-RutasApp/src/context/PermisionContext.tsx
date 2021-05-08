
import React, { useEffect } from 'react';

import { createContext, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { PERMISSIONS, PermissionStatus, request, check, openSettings } from 'react-native-permissions';


export interface PermisionsState {
    locationStatus: PermissionStatus;
}


export const permisionInitState: PermisionsState = {
    locationStatus: 'unavailable',
};

type PermisionsContextProps = {
    permisions: PermisionsState;
    askLocationPermisions: () => void;
    checkLocationPermisions: () => void;
}

export const PermisionsContext = createContext({} as PermisionsContextProps); //TODO qué exporta


export const PermissionsProvider = ({ children }: any) => {

    const [permisions, setPermisions] = useState(permisionInitState);

    useEffect(() => {

        checkLocationPermisions();
        
        AppState.addEventListener('change', state => {
            if (state !== 'active') { return; }

            checkLocationPermisions();
        });


    }, []);

    const askLocationPermisions = async () => {

        let permisionStatus: PermissionStatus;
        if (Platform.OS === 'ios') {

            permisionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {

            permisionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if (permisionStatus === 'blocked') {
            openSettings();
        }
        setPermisions({
            ...permisions,
            locationStatus: permisionStatus,
        });

    };
    const checkLocationPermisions = async () => {
        let permisionStatus: PermissionStatus;
        if (Platform.OS === 'ios') {

            permisionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {

            permisionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        setPermisions({
            ...permisions,
            locationStatus: permisionStatus,
        });

    };




    return (
        <PermisionsContext.Provider value={{
            permisions,
            askLocationPermisions,
            checkLocationPermisions,
        }}>
            {children}
        </PermisionsContext.Provider >
    );
};
