import { useAppSelector } from 'store/useRedux';
import CollectiomEditForm from 'components/collectionEditForm/collectionEditForm';
import { CollectionFormValues } from 'ts/interfaces';
import useSubmitCollectionForm from './useSubmitCollectionForm';

const initialValues: CollectionFormValues = {
    title: '',
    description: '',
    collectionTheme: '',
    image: null,
    customFields: [],
};

function NewCollectionPage() {
    const { user } = useAppSelector((store) => store.user);
    const { handleSubmit, isLoading } = useSubmitCollectionForm(
        user.sub as string,
        user.nickname as string
    );

    return (
        <CollectiomEditForm
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            isLoading={isLoading}
        />
    );
}

export default NewCollectionPage;
