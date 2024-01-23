import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { useCreateItemMutation } from 'store/api/itemApiSlice';
import useErrorHandle from 'hooks/useErrorHadle';
import useImageUpload from 'hooks/useImageUpload';
import { ItemFormValues } from 'ts/interfaces';

const useSubmitItemForm = (
    userId: string,
    createdBy: string,
    collectionId: string,
    collectionTitle: string
) => {
    const {
        uploadImage,
        isError: isImageError,
        isLoading: isImageLoading,
        isSuccess: isImageSuccess,
    } = useImageUpload();
    const [createItem, { isLoading: isItemCreating }] = useCreateItemMutation();
    const navigate = useNavigate();
    const handleError = useErrorHandle();

    const isLoading = isImageLoading || isItemCreating;

    const handleSubmit = async (value: ItemFormValues) => {
        const { tags, image, title, description, customFields } = value;
        const url = await uploadImage(image, title, userId);
        const item = {
            title,
            userId,
            imageUrl: url,
            description,
            tags,
            createdBy,
            collectionId,
            collectionTitle,
            likes: [],
            customFields,
        };

        createItem(item)
            .unwrap()
            .catch((e: FetchBaseQueryError) => handleError(e));
        navigate(-1);
    };

    return { handleSubmit, isLoading };
};

export default useSubmitItemForm;
