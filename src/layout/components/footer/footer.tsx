import React from 'react';
import {Stack} from '@mui/material';

import GitHubButton from './components/git-hub-button';

const Footer = () => {
    return (
        <Stack alignItems="center" marginY={1}>
            <GitHubButton/>
        </Stack>
    );
};

export default Footer;
