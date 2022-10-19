import React from 'react';
import {Stack} from '@mui/material';

import Logotype from './components/logotype';

const Header = () => {
    return (
        <Stack alignItems="center" marginY={1}>
            <Logotype/>
        </Stack>
    );
};

export default Header;
