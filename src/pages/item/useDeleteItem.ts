import { useNavigate } from 'react-router-dom';
import { useDeleteItemMutation } from 'store/api/itemApiSlice';

type THandleDelete = (itemId: string) => void;

interface IUseDeleteItem {
    handleDelete: THandleDelete;
    isLoading: boolean;
}

const useDeleteItem = (): IUseDeleteItem => {
    const navigate = useNavigate();
    const [deleteItem, { isLoading }] = useDeleteItemMutation();

    const handleDelete: THandleDelete = (itemId) => {
        deleteItem(itemId)
            .unwrap()
            .then(() => navigate(-1))
            .catch((e) => console.log(e.message));
    };

    return { handleDelete, isLoading };
};

export default useDeleteItem;
