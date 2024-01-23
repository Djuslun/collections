import { useLocation } from 'react-router-dom';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import ItemEditForm from 'components/itemEditForm/itemEditForm';
import { ItemFormValues } from 'ts/interfaces';
import Container from 'ui/container';
import useUpdateItemForm from './useUpdateItem';

function EditItemPage() {
    const { state } = useLocation();
    const { handleSubmit, isLoading } = useUpdateItemForm(state);

    return (
        <Container>
            <DataRequired data={state as ItemFormValues} isSuccess>
                {(item) => (
                    <ItemEditForm
                        handleSubmit={handleSubmit}
                        initialValues={item}
                        isLoading={isLoading}
                    />
                )}
            </DataRequired>
        </Container>
    );
}

export default EditItemPage;
