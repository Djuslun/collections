import { FieldProps } from 'formik';
import { useTranslation } from 'react-i18next';
import useItemCustomField from './useItemCustomField';

function CustomFieldForItem({ field, form }: FieldProps) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form.itemForm',
    });
    const { customFields, getFieldInput } = useItemCustomField(field, form);

    return (
        <div className="flex flex-col gap-3">
            <p className="">{t('customFildBrief')}</p>
            {customFields.map((field) => (
                <div key={field.id} className="flex flex-col mb-2">
                    <p className="">
                        {field.label} ({t(field.type)})
                    </p>
                    {getFieldInput(field.type, field.id, field.value)}
                </div>
            ))}
        </div>
    );
}

export default CustomFieldForItem;
