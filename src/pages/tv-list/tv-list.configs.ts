import {Sorting} from 'types/sorting';
import {Filter} from 'types/filter';

export const tvListSortingList: Sorting[] = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top_rated'},
    {label: 'Airing Today', value: 'airing_today'},
    {label: 'On The Air', value: 'on_the_air'}
];

export const tvListDefaultFilter: Filter = {
    sorting: tvListSortingList[0].value,
    genres: [],
    page: 1
};
