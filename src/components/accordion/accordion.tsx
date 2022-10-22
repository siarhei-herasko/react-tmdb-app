import React, {useState} from 'react';
import {Button, Collapse, Paper, Stack} from '@mui/material';

import {AccordionProps} from './accordion.types';

const Accordion = ({name, children}: AccordionProps) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };
    return (
        <Stack spacing={1}>
            <Button onClick={toggleOpen} variant="outlined" color="inherit">
                {name}
            </Button>
            <Collapse in={open}>
                <Stack component={Paper} variant="outlined" padding={1} spacing={1}>
                    {children}
                </Stack>
            </Collapse>
        </Stack>
    );
};

export default Accordion;
