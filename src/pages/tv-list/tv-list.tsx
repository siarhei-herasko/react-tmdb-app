import React, {Fragment, useEffect} from 'react';

import useFilter from 'hooks/use-filter';
import useRequest from 'hooks/use-request';
import {getTVList} from './tv-list.api';
import {tvListDefaultFilter, tvListSortingList} from './tv-list.configs';

import Accordion from 'components/accordion';
import SortingList from 'components/sorting-list';
import GenreList from 'components/genre-list';
import CardList from 'components/card-list';
import Pagination from 'components/pagination';

const TVList = () => {
    const {filter, setSorting, toggleGenre, setPage} = useFilter(tvListDefaultFilter);
    const {data, loading, error, run} = useRequest(getTVList);
    useEffect(() => {
        run(filter);
    }, [run, filter]);
    return (
        <Fragment>
            <Accordion name="Filter">
                <SortingList list={tvListSortingList} active={filter.sorting} onClick={setSorting}/>
                <GenreList type="tv" actives={filter.genres} onClick={toggleGenre}/>
            </Accordion>
            <CardList list={data?.list || []} loading={loading} error={error}/>
            <Pagination total={data?.total || 0} active={filter.page} onClick={setPage}/>
        </Fragment>
    );
};

export default TVList;
