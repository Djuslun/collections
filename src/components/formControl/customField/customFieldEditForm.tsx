import { Button } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';
import { FieldProps } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyState from 'components/emptyStates/emptyState';
import CustomField from './customField';
import useCustomFields from './useCustomField';
import useDisableCustomField from './useDisableCustomField';

function CustomFieldEditForm({ field, form }: FieldProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'form.collectionForm' });

    const { customFields, addCustomField, changeCustomField, deleteCustomField } =
        useCustomFields(field.value || []);
    useEffect(() => {
        form.setFieldValue(field.name, customFields);
    }, [customFields]);

    const getDisabledStatus = useDisableCustomField(field);

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
                    onClick={addCustomField}
                >
                    <AddIcon />
                </Button>
            </div>
            <div className="flex flex-col gap-3">
                {customFields.length ? (
                    customFields?.map((field) => (
                        <CustomField
                            key={field.id}
                            handleChange={changeCustomField}
                            field={field}
                            handleDelete={deleteCustomField}
                            edit={getDisabledStatus(field.id)}
                        />
                    ))
                ) : (
                    <EmptyState translationKey="customField" />
                )}
            </div>
        </div>
    );
}

export default CustomFieldEditForm;
