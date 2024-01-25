import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { useDeleteCollectionMutation } from 'store/api/collectionApiSlice';
import useErrorHandle from 'hooks/useErrorHadle';

type THandleDelete = (collectionId: string) => void;

interface IUseDeleteCollection {
    handleDelete: THandleDelete;
    isLoading: boolean;
}

const useDeleteCollection = (): IUseDeleteCollection => {
    const navigate = useNavigate();
    const [deleteCollection, { isLoading }] = useDeleteCollectionMutation();
    const handleError = useErrorHandle();

    const handleDelete: THandleDelete = (collectionId) => {
        deleteCollection(collectionId)
            .unwrap()
            .then(() => navigate(-1))
            .catch((e: FetchBaseQueryError) => handleError(e));
    };

    return { handleDelete, isLoading };
};

export default useDeleteCollection;
