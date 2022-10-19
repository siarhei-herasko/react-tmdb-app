import React from 'react';
import {Stack, Typography} from '@mui/material';

import {ErrorProps} from './error.types';

const Error = ({error}: ErrorProps) => {
    return (
        <Stack flex="auto" justifyContent="center" alignItems="center" marginY={1}>
            <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                {error}
            </Typography>
        </Stack>
    );
};

export default Error;
