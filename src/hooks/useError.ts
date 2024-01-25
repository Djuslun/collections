import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import useErrorHandle from './useErrorHadle';

const useError = (isError: boolean, error: FetchBaseQueryError | undefined) => {
    const handleError = useErrorHandle();

    useEffect(() => {
        if (isError && error) {
            handleError(error);
        }
    }, [isError, error]);
};

export default useError;
