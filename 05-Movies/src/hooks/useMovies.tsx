import { useEffect, useState } from 'react';

import moviedDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterfaces';


interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upComing: Movie[];
}

export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MovieState>(
        {
            nowPlaying: [],
            popular: [],
            topRated: [],
            upComing: [],
        }
    );

    const [isLoading, setIsLoading] = useState(false);

    const getMovies = async () => {

        try {
            const nowPlayingPromise = moviedDB.get<MovieDBResponse>('/now_playing');
            const popularPromise = moviedDB.get<MovieDBResponse>('/popular');
            const topRatedPromise = moviedDB.get<MovieDBResponse>('/top_rated');
            const upComingPromise = moviedDB.get<MovieDBResponse>('/upcoming');

            const resp = await Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upComingPromise,
            ]);

            setMoviesState({
                nowPlaying: resp[0].data.results,
                popular: resp[0].data.results,
                topRated: resp[0].data.results,
                upComing: resp[0].data.results,
            });



            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        // Now_playing
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
}