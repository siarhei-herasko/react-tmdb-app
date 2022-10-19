import React from 'react';
import {Stack} from '@mui/material';

import Logotype from './components/logotype';
import NavigationList from './components/navigation-list';

const Header = () => {
    return (
        <Stack alignItems="center" marginY={1} spacing={1}>
            <Logotype/>
            <NavigationList/>
        </Stack>
    );
};

export default Header;
