import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useRequest from 'hooks/use-request';
import {getMovieDetails} from './movie-details.api';

const MovieDetails = () => {
    const {data, loading, error, run} = useRequest(getMovieDetails);
    const {id} = useParams();
    useEffect(() => {
        if (id) {
            run(Number(id));
        }
    }, [run, id]);
    console.log(data, loading, error);
    return (
        <div>
            MovieDetails
        </div>
    );
};

export default MovieDetails;
