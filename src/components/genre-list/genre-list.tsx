import React, {useEffect} from 'react';
import {Button, Divider, Stack} from '@mui/material';

import useRequest from 'hooks/use-request';
import {getGenreList} from './genre-list.api';
import {GenreListProps} from './genre-list.types';

import Error from 'components/error';
import Loading from 'components/loading';

const GenreList = ({type, actives, onClick}: GenreListProps) => {
    const {data, loading, error, run} = useRequest(getGenreList);
    useEffect(() => {
        run(type);
    }, [run, type]);
    return (
        <Stack spacing={1}>
            <Divider textAlign="center">Genre List</Divider>
            {error ? (
                <Error error={error}/>
            ) : loading ? (
                <Loading/>
            ) : data && (
                <Stack direction="row" justifyContent="center" flexWrap="wrap">
                    {data.map(({label, value}) => (
                        <Button
                            key={value}
                            onClick={() => onClick(value)}
                            color={actives.includes(value) ? 'primary' : 'inherit'}
                            size="small"
                            sx={{margin: 0.5}}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
            )}
        </Stack>
    );
};

export default GenreList;
