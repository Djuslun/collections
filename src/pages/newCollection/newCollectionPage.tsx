import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import CollectiomEditForm from 'components/collectionEditForm/collectionEditForm';
import { ClientUrls } from 'ts/enums';
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
    const { user } = useAuth0();
    if (!user) {
        return <Navigate to={ClientUrls.homePage} />;
    }
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
