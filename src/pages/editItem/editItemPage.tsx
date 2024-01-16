import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';
import ItemEditForm from 'components/itemEditForm/itemEditForm';
import { ClientUrls } from 'ts/enums';
import Container from 'ui/container';
import useUpdateItemForm from './useUpdateItem';

function EditItemPage() {
    const { user } = useAuth0();
    const { state } = useLocation();

    const { handleSubmit, isLoading } = useUpdateItemForm(state);

    if (!user) {
        return <Navigate to={ClientUrls.homePage} />;
    }

    return (
        <Container>
            <ItemEditForm
                handleSubmit={handleSubmit}
                initialValues={state}
                isLoading={isLoading}
            />
        </Container>
    );
}

export default EditItemPage;
