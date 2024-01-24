import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useGetCollectionsQuery } from 'store/api/collectionApiSlice';
import useErrorHandle from 'hooks/useErrorHadle';

const useGetMyCollections = () => {
    const {
        data: collections,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetCollectionsQuery();
    const handleError = useErrorHandle();

    useEffect(() => {
        if (isError && error) {
            handleError(error as FetchBaseQueryError);
        }
    }, [isError, error]);

    return { collections, isLoading, isSuccess };
};

export default useGetMyCollections;
