import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'store/useRedux';
import CollectiomEditForm from 'components/collectionEditForm/collectionEditForm';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import { CollectionFormValues } from 'ts/interfaces';
import useUpdateCollection from './useUpdateCollection';

function EditCollectionPage() {
    const { user } = useAppSelector((store) => store.user);
    const { state } = useLocation();
    const { handleUpdate, isUpdating } = useUpdateCollection(state, user.sub as string);

    return (
        <DataRequired data={state as CollectionFormValues} isSuccess>
            {(collection) => (
                <CollectiomEditForm
                    handleSubmit={handleUpdate}
                    initialValues={collection}
                    isLoading={isUpdating}
                />
            )}
        </DataRequired>
    );
}

export default EditCollectionPage;
