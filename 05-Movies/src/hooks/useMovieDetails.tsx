import { useEffect, useState } from 'react';
import moviedDB from '../api/movieDB';
import { MovieFull } from '../interfaces/MovieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';


interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieID: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = moviedDB.get<MovieFull>(`/${movieID}`);
        const castPromise = moviedDB.get<CreditsResponse>(`/${movieID}/credits`);

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    }
}