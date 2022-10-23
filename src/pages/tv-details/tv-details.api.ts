import tmdb from 'configs/tmdb';
import {GetTVDetails, TVDetails} from './tv-details.types';

export const getTVDetails = (id: number) => new Promise<TVDetails | null>((res, rej) => {
    tmdb.get<GetTVDetails>(`/tv/${id}`)
        .then(({data}) => {
            if (data.id && (data.name || data.original_name)) {
                const genres = data?.genres?.filter(i => i.id && i.name);
                res({
                    id: data.id,
                    //@ts-ignore
                    title: data.name || data.original_name,
                    poster: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null,
                    overview: data.overview || null,
                    first_date: data.first_air_date ? data.first_air_date.substring(0, 4) : null,
                    last_date: data.last_air_date ? data.last_air_date.substring(0, 4) : null,
                    rating: data.vote_average || null,
                    //@ts-ignore
                    genres: genres?.length ? genres.map(i => ({label: i.name, value: i.id})) : null,
                    runtime: data.episode_run_time?.length ? data.episode_run_time.map(i => `${i}m`) : null
                });
            } else {
                res(null);
            }
        })
        .catch(error => rej(error));
});
