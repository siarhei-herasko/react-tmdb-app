import axios from 'axios';

const tmdbConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '048d3c156e55f36385dfd150ff9d1ca3'
};

const tmdb = axios.create({baseURL: tmdbConfig.baseUrl, params: {api_key: tmdbConfig.apiKey}});

export default tmdb;
