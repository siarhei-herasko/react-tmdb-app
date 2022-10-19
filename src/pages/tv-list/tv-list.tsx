import React, {useEffect} from 'react';

import useRequest from 'hooks/use-request';
import {getTVList} from './tv-list.api';
import {tvListDefaultFilter} from './tv-list.configs';

const TVList = () => {
    const {data, loading, error, run} = useRequest(getTVList);
    useEffect(() => {
        run(tvListDefaultFilter);
    }, [run]);
    console.log(data, loading, error);
    return (
        <div>
            TVList
        </div>
    );
};

export default TVList;
