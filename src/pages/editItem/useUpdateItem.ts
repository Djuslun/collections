import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { useUpdateItemMutation } from 'store/api/itemApiSlice';
import useErrorHandle from 'hooks/useErrorHadle';
import useImageUpload from 'hooks/useImageUpload';
import { Item, ItemFormValues } from 'ts/interfaces';

const useUpdateItemForm = (item: Item) => {
    const {
        uploadImage,
        isError: isImageError,
        isLoading: isImageLoading,
        isSuccess: isImageSuccess,
    } = useImageUpload();
    const [updateItem, { isLoading, isSuccess, isError }] = useUpdateItemMutation();
    const navigate = useNavigate();
    const handleError = useErrorHandle();

    const handleSubmit = async (value: ItemFormValues) => {
        const { tags, image, title, description, customFields } = value;
        const url = await uploadImage(image, title, item.userId);
        const updatedItem = {
            ...item,
            tags,
            imageUrl: value.image ? url : item.imageUrl,
            title,
            description,
            customFields,
        };

        updateItem(updatedItem)
            .unwrap()
            .catch((e: FetchBaseQueryError) => handleError(e));
        navigate(-1);
    };

    return { handleSubmit, isLoading };
};

export default useUpdateItemForm;
