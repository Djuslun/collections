import { Button } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';
import { FieldProps } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CustomField from './customField';
import useCastomFields from './useCustomField';

function CustomFieldEditForm({ field, form }: FieldProps) {
    const { customFields, addCusromField, changeCustomField, deleteCustomField } =
        useCastomFields(field.value || []);
    const { t } = useTranslation('translation', { keyPrefix: 'form.collectionForm' });

    useEffect(() => {
        form.setFieldValue(field.name, customFields);
    }, [customFields]);

    return (
        <div className="flex flex-col ">
            <p className="text-sm mb-2 dark:text-gray-400 text-gray-500">
                {t('customFildBrief')}
            </p>
            <div className="mb-4 flex items-center gap-2">
                <p className="inline-block mr-2 text-2xl font-bold">{t('addField')}</p>
                <Button
                    type="button"
                    className="p-1 flex items-center justify-center border border-gray-300 dark:border-gray-500 rounded-full leading-none bg-control "
                    onClick={addCusromField}
                >
                    <AddIcon />
                </Button>
            </div>
            <div className="flex flex-col gap-3">
                {customFields?.map((field) => (
                    <CustomField
                        key={field.id}
                        handleChange={changeCustomField}
                        field={field}
                        handleDelete={deleteCustomField}
                        edit
                    />
                ))}
            </div>
        </div>
    );
}

export default CustomFieldEditForm;
