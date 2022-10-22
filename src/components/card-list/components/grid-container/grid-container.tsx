import React from 'react';
import {Grid} from '@mui/material';

import {GridContainerProps} from './grid-container.types';

const GridContainer = ({children}: GridContainerProps) => {
    return (
        <div>
            <Grid justifyContent="center" spacing={1} container>
                {children}
            </Grid>
        </div>
    );
};

export default GridContainer;
