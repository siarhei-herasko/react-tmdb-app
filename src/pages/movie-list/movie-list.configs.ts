import {Sorting} from 'types/sorting';
import {Filter} from 'types/filter';

export const movieListSortingList: Sorting[] = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top_rated'},
    {label: 'Now Playing', value: 'now_playing'},
    {label: 'Upcoming', value: 'upcoming'}
];

export const movieListDefaultFilter: Filter = {
    sorting: movieListSortingList[0].value,
    genres: [],
    page: 1
};
