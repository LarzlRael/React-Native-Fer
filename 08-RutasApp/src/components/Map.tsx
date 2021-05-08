/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';

import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';
import { useState } from 'react';

export const Map = () => {

    const { hasLocation, initialPosition, userLocation, routeLines, getCurrentLocation, followUserLocation, stopFollowuserLocation } = useLocation();
    const [showPolyline, setShowPolyline] = useState(false);

    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();

        return () => {
            stopFollowuserLocation();
        };
    }, []);

    useEffect(() => {

        if (!following.current) { return; }

        const { latitude, longitude } = userLocation;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });

    }, [userLocation]);

    const centerPosition = async () => {

        const { latitude, longitude } = await getCurrentLocation();

        following.current = true;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    };

    if (!hasLocation) {
        return <LoadingScreen />;
    }


    return (
        <>
            <MapView
                ref={(el) => mapViewRef.current = el!}
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude!,
                    longitude: initialPosition.longitude!,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}

                onTouchStart={() => following.current = false}
            >

                {/* <Marker
                    / image={} 
                    coordinate={{
                        latitude: -16.529450,
                        longitude: -68.20824,
                    }}
                    title="this is a title"
                    description="esto es una descripcion del marcador"
                /> */}
                {showPolyline && <Polyline
                    coordinates={routeLines}
                    strokeColor="black"
                    strokeWidth={3}
                />}


            </MapView>

            <Fab
                iconName="compass-outline"
                onPress={
                    centerPosition
                }
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                }}
                size={25
                }
            />
            <Fab
                iconName="brush-outline"
                onPress={
                    () => setShowPolyline(!showPolyline)
                }
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 20,
                }}
                size={25}
            />

        </>
    );
};

