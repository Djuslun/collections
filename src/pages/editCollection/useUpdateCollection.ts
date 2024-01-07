/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom';
import { useUpdateCollectionMutation } from 'store/api/collectionApiSlice';
import useImageUpload from 'hooks/useImageUpload';
import { Collection, CollectionFormValues } from 'ts/interfaces';

const useUpdateCollection = (collection: Collection, userId: string) => {
    const [updateCollection, { isLoading: isUpdating }] = useUpdateCollectionMutation();
    const navigate = useNavigate();
    const { isLoading, isError, isSuccess, uploadImage } = useImageUpload();
    const { _id, itemCount, createdBy, createdAt, updatedAt } = collection;

    const handleUpdate = async (value: CollectionFormValues) => {
        const imageUrl = await uploadImage(value.image, value.title, collection.userId);
        const { title, description, collectionTheme, customFields } = value;

        const updatedCollection = {
            _id,
            title,
            userId,
            imageUrl,
            description,
            collectionTheme,
            itemCount,
            createdBy,
            createdAt,
            updatedAt,
            customFields: customFields.filter((field) => field.label && field.type),
        };

        updateCollection(updatedCollection).unwrap();
        navigate(-1);
    };

    return { handleUpdate, isUpdating };
};

export default useUpdateCollection;
