import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { useDeleteItemMutation } from 'store/api/itemApiSlice';
import useErrorHandle from 'hooks/useErrorHadle';

type THandleDelete = (itemId: string) => void;

interface IUseDeleteItem {
    handleDelete: THandleDelete;
    isLoading: boolean;
}

const useDeleteItem = (): IUseDeleteItem => {
    const navigate = useNavigate();
    const [deleteItem, { isLoading }] = useDeleteItemMutation();
    const handleError = useErrorHandle();

    const handleDelete: THandleDelete = (itemId) => {
        deleteItem(itemId)
            .unwrap()
            .then(() => navigate(-1))
            .catch((e: FetchBaseQueryError) => handleError(e));
    };

    return { handleDelete, isLoading };
};

export default useDeleteItem;
