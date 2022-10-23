import {MutableRefObject, useEffect, useState} from 'react';

export const useLazyImage = (src: string | null, ref: MutableRefObject<HTMLDivElement | null>) => {
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState<'finished' | 'loading' | 'error' | 'no-image' | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
        const current = ref.current;
        if (current) {
            observer.observe(current);
        }
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [ref]);
    useEffect(() => {
        if (visible) {
            if (src) {
                setStatus('loading');
                const image = new Image();
                image.onload = () => setStatus('finished');
                image.onerror = () => setStatus('error');
                image.src = src;
            } else {
                setStatus('no-image');
            }
        }
    }, [visible, src, setStatus]);
    return status;
};
