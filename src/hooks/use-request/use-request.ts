import {useCallback, useState} from 'react';

const useRequest = <Data, Params extends any[]>(promise: (...args: Params) => Promise<Data>) => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const run = useCallback((...args: Params) => {
        setData(null);
        setLoading(true);
        setError(null);
        promise(...args)
            .then((response) => {
                setData(response);
                setError(null);
            })
            .catch((error: Error) => {
                setData(null);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [promise]);
    return {data, loading, error, run};
};

export default useRequest;
