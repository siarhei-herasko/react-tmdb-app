import {Card} from 'types/card';

export type GetMovieList = {
    page?: number;
    results?: {
        adult?: boolean;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        original_language?: string;
        original_title?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: boolean;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_results?: number;
    total_pages?: number;
}

export type MovieList = {
    list: Card[];
    total: number;
}
