import React from 'react';
import {Button, Divider, Stack} from '@mui/material';

import {SortingListProps} from './sorting-list.types';

const SortingList = ({list, active, onClick}: SortingListProps) => {
    return (
        <Stack spacing={1}>
            <Divider textAlign="center">Sorting List</Divider>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {list.map(({label, value}) => (
                    <Button
                        key={value}
                        onClick={() => onClick(value)}
                        color={active === value ? 'primary' : 'inherit'}
                        sx={{margin: 0.5}}
                    >
                        {label}
                    </Button>
                ))}
            </Stack>
        </Stack>
    );
};

export default SortingList;
