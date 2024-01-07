import { Button } from '@mui/base';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { customFielsTypes } from 'utils/consts';
import useTranslateSelectOptions from 'hooks/useTranslateSelectOptions';
import { ICustomField } from 'ts/interfaces';

function CustomField({
    handleChange,
    handleDelete,
    field,
    edit,
}: {
    handleChange: (key: keyof ICustomField, value: string, id: string) => void;
    handleDelete: (id: string) => void;
    field: ICustomField;
    edit: boolean;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'form.collectionForm' });
    const options = useTranslateSelectOptions(customFielsTypes, 'customFieldType');
    const getValue = () => options.find((option) => option.value === field.type);

    return (
        <div className="grid grid-cols-7 gap-3 w-full">
            <input
                type="text"
                className=" p-2 col-span-3 input text-sm smm:text-base"
                value={field.label}
                placeholder={t('customFieldLabelPlaceholder')}
                onChange={({ target }) => handleChange('label', target.value, field.id)}
            />
            <Select
                value={getValue()}
                onChange={(value) =>
                    handleChange('type', value?.value as string, field.id)
                }
                options={options}
                className="react-select-container react-select-styles col-span-3 h-full"
                classNamePrefix="react-select"
                menuPlacement="bottom"
                placeholder={t('customFieldTypePlaceholder')}
                isDisabled={edit}
            />
            <Button
                type="button"
                className="p-0 smm:p-2 bg-control border-with-shadow"
                onClick={() => handleDelete(field.id)}
            >
                <RemoveIcon className="text-lg" />
            </Button>
        </div>
    );
}

export default CustomField;
