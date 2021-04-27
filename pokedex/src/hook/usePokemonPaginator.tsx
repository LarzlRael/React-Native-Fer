import { useEffect, useState, useRef } from 'react';

import { pokemonApi } from '../api/pokemonApi';
export const usePokemonPaginator = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=40/';
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40/');

    const loadPokemons = async () => {

        const resp = await pokemonApi.get(nextPageUrl.current);
        console.log(JSON.stringify(resp, null, 1));
    };

    useEffect(() => {
        loadPokemons();
    }, [])
    return {
        url
    };
};