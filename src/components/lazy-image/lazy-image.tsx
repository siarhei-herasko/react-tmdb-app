import React, {useRef} from 'react';
import {CircularProgress, Stack} from '@mui/material';
import {ImageNotSupportedOutlined, ReportOutlined} from '@mui/icons-material';

import {useLazyImage} from './lazy-image.hooks';
import {LazyImageProps} from './lazy-image.types';

const LazyImage = ({src, alt, aspectRatio}: LazyImageProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const status = useLazyImage(src, ref);
    return (
        <Stack ref={ref} justifyContent="center" alignItems="center" sx={{aspectRatio}}>
            {(() => {
                switch (status) {
                    case 'finished':
                        // @ts-ignore
                        return <img src={src} alt={alt} width="100%" height="100%" style={{aspectRatio}}/>;
                    case 'loading':
                        return <CircularProgress color="inherit"/>;
                    case 'error':
                        return <ReportOutlined fontSize="large"/>;
                    case 'no-image':
                        return <ImageNotSupportedOutlined fontSize="large"/>;
                    case null:
                        return null;
                }
            })()}
        </Stack>
    );
};

export default LazyImage;
