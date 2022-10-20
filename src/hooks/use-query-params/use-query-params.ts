import {useCallback, useMemo} from 'react';
import {NavigateOptions, useSearchParams} from 'react-router-dom';

const useQueryParams = <T>(key: string, defaultValue: T): [T, (newValue: T, options?: NavigateOptions) => void] => {
    const [searchParams, setSearchParams] = useSearchParams();
    const paramsValue = searchParams.get(key);
    const value: T = useMemo(() => paramsValue ? JSON.parse(paramsValue) : defaultValue, [paramsValue, defaultValue]);
    const setValue = useCallback((newValue: T, options?: NavigateOptions) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(key, JSON.stringify(newValue));
        setSearchParams(newSearchParams, options);
    }, [key, searchParams, setSearchParams]);
    return [value, setValue];
};

export default useQueryParams;
