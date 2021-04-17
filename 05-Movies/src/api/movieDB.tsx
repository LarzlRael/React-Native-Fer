import axios from 'axios';

const moviedDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '7135ebe6b690f38898f6ff3f63d33ff3',
        language: 'es-ES',
    },
});

export default moviedDB;