import React from 'react';
import {Grid} from '@mui/material';

import {GridItemProps} from './grid-item.types';

const GridItem = ({children}: GridItemProps) => {
    return (
        <Grid xs={12} sm={6} md={4} lg={3} item>
            {children}
        </Grid>
    );
};

export default GridItem;
