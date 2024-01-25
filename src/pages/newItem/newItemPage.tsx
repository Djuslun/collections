import { useLocation } from 'react-router-dom';
import DataRequired from 'components/dataRequired/dataRequiredWrapper';
import { Collection } from 'ts/interfaces';
import Container from 'ui/container';
import ItemEditFormWrapper from './itemEditFormWrapper';

function NewItemPage() {
    const { state } = useLocation();

    return (
        <Container>
            <DataRequired data={state as Collection} isSuccess>
                {(collection) => <ItemEditFormWrapper collection={collection} />}
            </DataRequired>
        </Container>
    );
}

export default NewItemPage;
