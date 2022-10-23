export type GetMovieDetails = {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: {
        backdrop_path?: string;
        id?: number;
        name?: string;
        poster_path?: string;
    };
    budget?: number;
    genres?: {
        id?: number;
        name?: string;
    }[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: {
        name?: string;
        id?: number;
        logo_path?: string;
        origin_country?: string;
    }[];
    production_countries?: {
        iso_3166_1?: string;
        name?: string;
    }[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: {
        english_name?: string;
        iso_639_1?: string;
        name?: string;
    }[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export type MovieDetails = {
    id: number;
    title: string;
    poster: string | null;
    overview: string | null;
    date: string | null;
    rating: number | null;
    genres: {
        label: string;
        value: number;
    }[] | null;
    runtime: string | null;
}
