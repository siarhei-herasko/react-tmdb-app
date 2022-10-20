import React, {ChangeEvent} from 'react';
import {Pagination as MUIPagination, Stack} from '@mui/material';

import {PaginationProps} from './pagination.types';

const Pagination = ({total, active, onClick}: PaginationProps) => {
    if (total <= 1) {
        return null;
    } else {
        return (
            <Stack alignItems="center">
                <MUIPagination
                    count={total}
                    page={active}
                    onChange={(event: ChangeEvent<unknown>, newPage: number) => onClick(newPage)}
                    variant="outlined"
                    shape="rounded"
                    hidePrevButton
                    hideNextButton
                />
            </Stack>
        );
    }
};

export default Pagination;
