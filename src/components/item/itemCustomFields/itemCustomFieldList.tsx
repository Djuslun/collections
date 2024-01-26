import { ICustomFieldItem } from 'ts/interfaces';
import ItemCustomField from './itemCustomField';

function ItemCustomFieldList({ customFields }: { customFields: ICustomFieldItem[] }) {
    return (
        <ul className="flex flex-col gap-2 border-y border-gray-400 py-2">
            {customFields.map((field) => (
                <li key={field.id}>
                    <ItemCustomField {...field} />
                </li>
            ))}
        </ul>
    );
}

export default ItemCustomFieldList;
