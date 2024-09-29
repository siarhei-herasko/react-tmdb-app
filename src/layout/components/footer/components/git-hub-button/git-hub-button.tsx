import React from 'react';
import {Button} from '@mui/material';
import {GitHub} from '@mui/icons-material';

const GitHubButton = () => {
    const goToGitHub = () => {
        
    };
    return (
        <Button onClick={goToGitHub} color="inherit">
            <GitHub/>
        </Button>
    );
};

export default GitHubButton;
