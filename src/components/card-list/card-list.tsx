import React from 'react';

import {CardListProps} from './card-list.types';

import Error from 'components/error';
import Loading from 'components/loading';
import GridContainer from './components/grid-container';
import GridItem from './components/grid-item/';
import Card from './components/card';

const CardList = ({list, loading, error}: CardListProps) => {
    if (error) {
        return <Error error={error}/>;
    } else if (loading) {
        return <Loading/>;
    } else {
        return (
            <GridContainer>
                {list.map(card => (
                    <GridItem key={card.id}>
                        <Card {...card}/>
                    </GridItem>
                ))}
            </GridContainer>
        );
    }
};

export default CardList;
