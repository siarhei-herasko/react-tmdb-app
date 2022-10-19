import {Card} from 'types/card';

export type GetTVList = {
    page?: number;
    results?: {
        backdrop_path?: string;
        first_air_date?: string;
        genre_ids?: number[];
        id?: number;
        name?: string;
        origin_country?: string[];
        original_language?: string;
        original_name?: string;
        overview?: string;
        popularity?: number;
        poster_path?: string;
        vote_average?: number;
        vote_count?: number;
    }[];
    total_results?: number;
    total_pages?: number;
}

export type TVList = {
    list: Card[];
    total: number;
}
