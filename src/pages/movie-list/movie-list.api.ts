import tmdb from 'configs/tmdb';
import {Filter} from 'types/filter';
import {GetMovieList, MovieList} from './movie-list.types';

export const getMovieList = (filter: Filter) => new Promise<MovieList>((res, rej) => {
    tmdb.get<GetMovieList>(`/movie/${filter.sorting}`, {params: {with_genres: filter.genres.join(','), page: filter.page}})
        .then(({data}) => {
            res({
                // @ts-ignore
                list: data.results?.filter(i => i.id && (i.title || i.original_title)).map(i => ({
                    type: 'movie',
                    id: i.id,
                    title: i.title || i.original_title,
                    poster: i.poster_path ? `https://image.tmdb.org/t/p/w500${i.poster_path}` : null
                })) || [],
                total: data.total_pages ? data.total_pages <= 500 ? data.total_pages : 500 : 0
            });
        })
        .catch(error => rej(error));
});
