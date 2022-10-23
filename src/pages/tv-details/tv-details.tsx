import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useRequest from 'hooks/use-request';
import {getTVDetails} from './tv-details.api';

const TVDetails = () => {
    const {data, loading, error, run} = useRequest(getTVDetails);
    const {id} = useParams();
    useEffect(() => {
        if (id) {
            run(Number(id));
        }
    }, [run, id]);
    console.log(data, loading, error);
    return (
        <div>
            TVDetails
        </div>
    );
};

export default TVDetails;
