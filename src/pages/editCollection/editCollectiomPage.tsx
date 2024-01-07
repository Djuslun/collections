import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';
import CollectiomEditForm from 'components/collectionEditForm/collectionEditForm';
import { ClientUrls } from 'ts/enums';
import useUpdateCollection from './useUpdateCollection';

function EditCollectionPage() {
    const { user } = useAuth0();
    const { state } = useLocation();

    if (!user) {
        return <Navigate to={ClientUrls.homePage} />;
    }

    const { handleUpdate, isUpdating } = useUpdateCollection(state, user.sub as string);

    return (
        <CollectiomEditForm
            handleSubmit={handleUpdate}
            initialValues={state}
            isLoading={isUpdating}
        />
    );
}

export default EditCollectionPage;
