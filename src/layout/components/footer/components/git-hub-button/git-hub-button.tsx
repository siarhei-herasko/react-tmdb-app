import React from 'react';
import {Button} from '@mui/material';
import {GitHub} from '@mui/icons-material';

const GitHubButton = () => {
    const goToGitHub = () => {
        window.location.href = 'https://github.com/siarhei-herasko';
    };
    return (
        <Button onClick={goToGitHub} color="inherit">
            <GitHub/>
        </Button>
    );
};

export default GitHubButton;
