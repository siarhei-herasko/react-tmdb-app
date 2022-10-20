import {Filter} from 'types/filter';

export type GenreListProps = {
    type: 'movie' | 'tv';
    actives: Filter['genres'];
    onClick: (value: Filter['genres'][0]) => void;
}

export type GetGenreList = {
    genres?: {
        id?: number;
        name?: string;
    }[]
}

export type GenreList = {
    label: string;
    value: number;
}[]
