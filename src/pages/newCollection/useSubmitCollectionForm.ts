import { useNavigate } from 'react-router-dom';
import { useCreateCollectionMutation } from 'store/api/collectionApiSlice';
import useImageUpload from 'hooks/useImageUpload';
import { ClientUrls } from 'ts/enums';
import { THandleSubmitCollectionForm } from 'ts/types';

interface IUseSubmitCollectionForm {
    handleSubmit: THandleSubmitCollectionForm;
    isLoading: boolean;
}

const useSubmitCollectionForm = (
    userId: string,
    createdBy: string
): IUseSubmitCollectionForm => {
    const { uploadImage, isLoading: isImageLoading } = useImageUpload();
    const [createCollection, { isLoading: isCollectionCreating }] =
        useCreateCollectionMutation();
    const navigate = useNavigate();
    const isLoading = isImageLoading || isCollectionCreating;

    const handleSubmit: THandleSubmitCollectionForm = async (value) => {
        const { title, description, collectionTheme, customFields, image } = value;
        const url = await uploadImage(image, title, userId);

        const collection = {
            title,
            description,
            collectionTheme,
            userId,
            imageUrl: url,
            createdBy,
            customFields: customFields.filter((field) => field.label && field.type),
        };

        createCollection(collection).unwrap();
        navigate(ClientUrls.profile);
    };

    return { handleSubmit, isLoading };
};

export default useSubmitCollectionForm;
