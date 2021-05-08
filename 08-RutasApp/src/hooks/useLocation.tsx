import { useEffect, useState, useRef } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';


export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });
    const [routeLines, setRouteLines] = useState<Location[]>([]);

    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    const watchId = useRef<number>();
    const isMounted = useRef(true);


    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;

        };
    }, [])

    useEffect(() => {


        getCurrentLocation()
            .then(location => {

                if (!isMounted.current) { return; }
                setInitialPosition(location);
                setUserLocation(location);
                setRouteLines(routes => [...routes, location]);
                setHasLocation(true);
            });

    }, []);



    const getCurrentLocation = (): Promise<Location> => {

        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(

                ({ coords }) => {

                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });

                },
                (err) => reject({ err }),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        });
    };


    const followUserLocation = () => {

        watchId.current = Geolocation.watchPosition(
            ({ coords: { latitude, longitude } }) => {

                if (!isMounted.current) return;
                
                const location: Location = {
                    latitude,
                    longitude,
                };

                setUserLocation(location);
                setRouteLines(routes => [...routes, location]);
            },
            console.log,
            { enableHighAccuracy: true, distanceFilter: 5, timeout: 20000, maximumAge: 1000 }

        );

    };

    const stopFollowuserLocation = () => {
        if (watchId.current) {
            Geolocation.clearWatch(watchId.current);
        }
    }

    return {
        hasLocation,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowuserLocation,
    };
};
