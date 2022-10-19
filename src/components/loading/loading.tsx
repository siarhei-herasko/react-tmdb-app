import React from 'react';
import {CircularProgress, Stack} from '@mui/material';

const Loading = () => {
    return (
        <Stack flex="auto" justifyContent="center" alignItems="center" marginY={1}>
            <CircularProgress color="inherit"/>
        </Stack>
    );
};

export default Loading;
