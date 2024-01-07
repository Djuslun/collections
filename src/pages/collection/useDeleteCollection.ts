import { useNavigate } from 'react-router-dom';
import { useDeleteCollectionMutation } from 'store/api/collectionApiSlice';

type THandleDelete = (collectionId: string) => void;

interface IUseDeleteCollection {
    handleDelete: THandleDelete;
    isLoading: boolean;
}

const useDeleteCollection = (): IUseDeleteCollection => {
    const navigate = useNavigate();
    const [deleteCollection, { isLoading }] = useDeleteCollectionMutation();

    const handleDelete: THandleDelete = (collectionId) => {
        deleteCollection(collectionId)
            .unwrap()
            .then(() => navigate(-1))
            .catch((e) => console.log(e.message));
    };

    return { handleDelete, isLoading };
};

export default useDeleteCollection;
