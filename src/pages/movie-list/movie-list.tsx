import React, {useEffect} from 'react';

import useRequest from 'hooks/use-request';
import {getMovieList} from './movie-list.api';
import {movieListDefaultFilter} from './movie-list.configs';

const MovieList = () => {
    const {data, loading, error, run} = useRequest(getMovieList);
    useEffect(() => {
        run(movieListDefaultFilter);
    }, [run]);
    console.log(data, loading, error);
    return (
        <div>
            MovieList
        </div>
    );
};

export default MovieList;
