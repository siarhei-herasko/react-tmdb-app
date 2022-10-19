import {Path} from 'routing';
import {Navigation} from './navigation-list.types';

export const navigationList: Navigation[] = [
    {label: 'Home', path: Path.Home},
    {label: 'Movie List', path: Path.MovieList},
    {label: 'TV List', path: Path.TVList}
];
