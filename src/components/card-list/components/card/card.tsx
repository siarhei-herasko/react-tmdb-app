import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Card as MUICard, CardActionArea, CardContent, Typography} from '@mui/material';

import {Path} from 'routing';
import {CardProps} from './card.types';

import LazyImage from 'components/lazy-image';

const Card = ({type, id, title, poster}: CardProps) => {
    const navigate = useNavigate();
    const goToDetails = () => {
        const path = type === 'movie' ? Path.MovieDetails : Path.TVDetails;
        navigate(`${path}/${id}`);
    };
    return (
        <MUICard onClick={goToDetails} variant="outlined">
            <CardActionArea>
                <LazyImage src={poster} alt={title} aspectRatio="3/4"/>
                <CardContent>
                    <Typography variant="h2" fontSize="1rem" fontWeight="medium" align="center" noWrap>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MUICard>
    );
};

export default Card;
