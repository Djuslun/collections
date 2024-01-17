import MDEditor from '@uiw/react-md-editor';
import { ICustomFieldItem } from 'ts/interfaces';

type ItemCustomFieldProps = Omit<ICustomFieldItem, 'id'>;

function ItemCustomField({ label, value, type }: ItemCustomFieldProps) {
    type ValueType = ItemCustomFieldProps['value'];

    const transformValue = (value: ValueType, type: string) => {
        if (!value && value !== 0) {
            return '-';
        }

        if (type === 'date') {
            return new Date(String(value)).toLocaleDateString();
        }

        if (type === 'boolean') {
            return '✓';
        }

        if (type === 'textarea') {
            return (
                <MDEditor.Markdown
                    className="md-marldown-styles"
                    source={(value as string) || '-'}
                />
            );
        }

        return String(value);
    };

    return (
        <div className="flex gap-2">
            <p className="w-1/3 font-semibold">{label}</p>
            <div className="w-2/3 break-words">{transformValue(value, type)}</div>
        </div>
    );
}

export default ItemCustomField;
