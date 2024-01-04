import CollectiomEditForm from 'components/collectionEditForm/collectiomEditForm';
import { CollectionFormValues } from 'ts/interfaces';

const initialValues: CollectionFormValues = {
    title: '',
    description: '',
    collectionTheme: '',
    image: null,
    customFields: [],
};

function NewCollectionPage() {
    const handleSubmit = (value: CollectionFormValues) => {
        console.log(value);
    };

    return (
        <CollectiomEditForm handleSubmit={handleSubmit} initialValues={initialValues} />
    );
}

export default NewCollectionPage;
