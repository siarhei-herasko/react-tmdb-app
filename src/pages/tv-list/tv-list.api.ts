import tmdb from 'configs/tmdb';
import {Filter} from 'types/filter';
import {GetTVList, TVList} from './tv-list.types';

export const getTVList = (filter: Filter) => new Promise<TVList>((res, rej) => {
    tmdb.get<GetTVList>(`/tv/${filter.sorting}`, {params: {with_genres: filter.genres.join(','), page: filter.page}})
        .then(({data}) => {
            res({
                // @ts-ignore
                list: data.results?.filter(i => i.id && (i.name || i.original_name)).map(i => ({
                    type: 'tv',
                    id: i.id,
                    title: i.name || i.original_name,
                    poster: i.poster_path ? `https://image.tmdb.org/t/p/w500${i.poster_path}` : null
                })) || [],
                total: data.total_pages ? data.total_pages <= 500 ? data.total_pages : 500 : 0
            });
        })
        .catch(error => rej(error));
});
