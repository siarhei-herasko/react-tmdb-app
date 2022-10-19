import React from 'react';
import {Container as MUIContainer, Stack} from '@mui/material';

import {ContainerProps} from './container.types';

const Container = ({children}: ContainerProps) => {
    return (
        <Stack component={MUIContainer} minHeight="100vh">
            {children}
        </Stack>
    );
};

export default Container;
