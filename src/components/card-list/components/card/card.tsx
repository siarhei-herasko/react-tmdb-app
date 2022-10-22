import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Card as MUICard, CardContent, CardMedia, Typography} from '@mui/material';

import {Path} from 'routing';
import {CardProps} from './card.types';

const Card = ({type, id, title, poster}: CardProps) => {
    const navigate = useNavigate();
    const goToDetails = () => {
        const path = type === 'movie' ? Path.MovieDetails : Path.TVDetails;
        navigate(`${path}/${id}`);
    };
    return (
        <MUICard onClick={goToDetails} variant="outlined">
            <CardMedia image={poster || undefined} component="img" sx={{aspectRatio: '3/4'}}/>
            <CardContent>
                <Typography variant="h2" fontSize="1rem" fontWeight="medium" align="center" noWrap>
                    {title}
                </Typography>
            </CardContent>
        </MUICard>
    );
};

export default Card;
