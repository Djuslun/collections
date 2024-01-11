import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';
import ItemEditForm from 'components/itemEditForm/itemEditForm';
import { ClientUrls } from 'ts/enums';
import { Collection, ICustomFieldItem } from 'ts/interfaces';
import Container from 'ui/container';
import useSubmitItemForm from './useSubmitItemForm';

function NewItemPage() {
    const { user } = useAuth0();
    const { state } = useLocation();
    if (!user) {
        return <Navigate to={ClientUrls.homePage} />;
    }
    const { handleSubmit } = useSubmitItemForm(
        user.sub as string,
        user.nickname as string,
        state.collectionId,
        state.collectionTitle
    );

    const { customFields } = state as Collection;

    const itemsCustomFields: ICustomFieldItem[] = customFields.map((field) =>
        field.type === 'boolean' ? { ...field, value: false } : { ...field, value: '' }
    );

    const initialValues = {
        title: '',
        description: '',
        tags: [],
        image: null,
        customFields: itemsCustomFields,
    };

    return (
        <Container>
            <ItemEditForm
                handleSubmit={handleSubmit}
                initialValues={initialValues}
                isLoading={false}
            />
        </Container>
    );
}

export default NewItemPage;
