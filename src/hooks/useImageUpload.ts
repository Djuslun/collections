/* eslint-disable consistent-return */
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from 'utils/firebase';

type TUploadImage = (
    image: File | null,
    title: string,
    ownerId: string
) => Promise<string | undefined>;

interface IUseImageUpload {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    uploadImage: TUploadImage;
}

const useImageUpload = (): IUseImageUpload => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const uploadImage: TUploadImage = async (image, title, ownerId) => {
        try {
            setIsLoading(true);

            if (image !== null) {
                const file = image as File;
                const imageRef = ref(storage, `images/${file.name + uuidv4()}`);
                const snapshot = await uploadBytes(imageRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref);

                setIsSuccess(true);
                return downloadURL;
            }
            return `https://source.boringavatars.com/bauhaus/120/${title}%20${ownerId}?colors=b9d3b0,81bda4,b28774,f88f79,f6aa93&square`;
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, isSuccess, uploadImage };
};

export default useImageUpload;
