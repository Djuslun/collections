import { useNavigate } from 'react-router-dom';
import { useCreateItemMutation } from 'store/api/itemApiSlice';
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
    const [createItem, { isLoading, isSuccess, isError }] = useCreateItemMutation();
    const navigate = useNavigate();

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
            .catch((e) => console.log(e));
        navigate(-1);
    };

    return { handleSubmit };
};

export default useSubmitItemForm;
