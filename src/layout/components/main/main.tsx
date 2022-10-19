import React from 'react';
import {Stack} from '@mui/material';

import {MainProps} from './main.types';

const Main = ({children}: MainProps) => {
    return (
        <Stack flex="auto" marginY={1} spacing={1}>
            {children}
        </Stack>
    );
};

export default Main;
