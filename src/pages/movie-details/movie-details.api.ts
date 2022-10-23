import tmdb from 'configs/tmdb';
import {GetMovieDetails, MovieDetails} from './movie-details.types';

export const getMovieDetails = (id: number) => new Promise<MovieDetails | null>((res, rej) => {
    tmdb.get<GetMovieDetails>(`/movie/${id}`)
        .then(({data}) => {
            if (data.id && (data.title || data.original_title)) {
                const genres = data?.genres?.filter(i => i.id && i.name);
                res({
                    id: data.id,
                    //@ts-ignore
                    title: data.title || data.original_title,
                    poster: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null,
                    overview: data.overview || null,
                    date: data.release_date ? data.release_date.substring(0, 4) : null,
                    rating: data.vote_average || null,
                    //@ts-ignore
                    genres: genres?.length ? genres.map(i => ({label: i.name, value: i.id})) : null,
                    runtime: data.runtime ? `${data.runtime}m` : null
                });
            } else {
                res(null);
            }
        })
        .catch(error => rej(error));
});
