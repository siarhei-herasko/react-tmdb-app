import {useCallback} from 'react';

import useQueryParams from 'hooks/use-query-params';
import {Filter} from 'types/filter';

const useFilter = (defaultFilter: Filter) => {
    const [filter, setFilter] = useQueryParams('filter', defaultFilter);
    const setSorting = useCallback((sorting: Filter['sorting']) => {
        if (sorting !== filter.sorting) {
            setFilter({
                sorting: sorting,
                genres: defaultFilter.genres,
                page: defaultFilter.page
            });
        }
    }, [filter.sorting, defaultFilter.genres, defaultFilter.page, setFilter]);
    const toggleGenre = useCallback((genre: Filter['genres'][0]) => {
        setFilter({
            sorting: filter.sorting,
            genres: filter.genres.includes(genre) ? filter.genres.filter(i => i !== genre) : [...filter.genres, genre],
            page: defaultFilter.page
        });
    }, [filter.sorting, filter.genres, defaultFilter.page, setFilter]);
    const setPage = useCallback((page: Filter['page']) => {
        if (page !== filter.page) {
            setFilter({
                sorting: filter.sorting,
                genres: filter.genres,
                page: page
            });
        }
    }, [filter.sorting, filter.genres, filter.page, setFilter]);
    return {filter, setFilter, setSorting, toggleGenre, setPage};
};

export default useFilter;
