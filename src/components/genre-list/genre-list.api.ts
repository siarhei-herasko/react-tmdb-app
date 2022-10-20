import tmdb from 'configs/tmdb';
import {GenreList, GetGenreList} from './genre-list.types';

export const getGenreList = (type: 'movie' | 'tv') => new Promise<GenreList>((res, rej) => {
    tmdb.get<GetGenreList>(`/genre/${type}/list`)
        .then(({data}) => {
            // @ts-ignore
            res(data.genres?.filter(i => i.id && i.name).map(i => ({
                label: i.name,
                value: i.id
            })) || []);
        })
        .catch(error => rej(error));
});
