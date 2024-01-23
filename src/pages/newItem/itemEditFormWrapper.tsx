import { useAppSelector } from 'store/useRedux';
import ItemEditForm from 'components/itemEditForm/itemEditForm';
import { Collection, ICustomFieldItem } from 'ts/interfaces';
import useSubmitItemForm from './useSubmitItemForm';

function ItemEditFormWrapper({ collection }: { collection: Collection }) {
    const { user } = useAppSelector((store) => store.user);

    const { handleSubmit, isLoading } = useSubmitItemForm(
        user.sub as string,
        user.nickname as string,
        collection._id,
        collection.title
    );
    const { customFields } = collection;

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
        <ItemEditForm
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            isLoading={isLoading}
        />
    );
}

export default ItemEditFormWrapper;
