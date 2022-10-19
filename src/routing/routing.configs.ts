import {lazy} from 'react';

import {Route} from './routing.types';

const Home = lazy(() => import(/* webpackChunkName: "home" */'pages/home'));
const MovieList = lazy(() => import(/* webpackChunkName: "movie-list" */'pages/movie-list'));
const TVList = lazy(() => import(/* webpackChunkName: "tv-list" */'pages/tv-list'));
const MovieDetails = lazy(() => import(/* webpackChunkName: "movie-details" */'pages/movie-details'));
const TVDetails = lazy(() => import(/* webpackChunkName: "tv-details" */'pages/tv-details'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */'pages/not-found'));

export enum Path {
    Home = '/',
    MovieList = '/movie-list',
    TVList = '/tv-list',
    MovieDetails = '/movie-details',
    TVDetails = '/tv-details',
}

export const routeList: Route[] = [
    {path: Path.Home, component: Home},
    {path: Path.MovieList, component: MovieList},
    {path: Path.TVList, component: TVList},
    {path: `${Path.MovieDetails}/:id`, component: MovieDetails},
    {path: `${Path.TVDetails}/:id`, component: TVDetails},
    {path: '*', component: NotFound}
];
