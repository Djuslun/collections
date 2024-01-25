/* eslint-disable react/jsx-no-useless-fragment */

/* eslint-disable consistent-return */

/* eslint-disable arrow-body-style */
import Switch from '@mui/material/Switch';
import MDEditor from '@uiw/react-md-editor';
import { FieldProps } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICustomFieldItem } from 'ts/interfaces';
import { CustomFieldTypes } from 'ts/types';

interface IUseItemCustomField {
    getFieldInput: (
        type: CustomFieldTypes,
        id: string,
        value?: number | string | boolean | Date
    ) => JSX.Element | undefined;
    customFields: ICustomFieldItem[];
}

type TFieldType = FieldProps['field'];
type TFormType = FieldProps['form'];

const useItemCustomField = (field: TFieldType, form: TFormType): IUseItemCustomField => {
    const [customFields, setCustomFields] = useState<ICustomFieldItem[]>(field.value);
    const { t } = useTranslation('translation', { keyPrefix: 'form.itemForm' });

    useEffect(() => {
        form.setFieldValue(field.name, customFields);
    }, [customFields]);

    const handleChange = (id: string, value: number | string | boolean | Date) => {
        setCustomFields((prev: ICustomFieldItem[]) => {
            return prev.map((item) => {
                if (item.id === id) {
                    const updatedItem = { ...item, value };
                    return updatedItem;
                }
                return item;
            });
        });
    };

    const getFieldInput = (
        type: CustomFieldTypes,
        id: string,
        value?: number | string | boolean | Date
    ) => {
        switch (type) {
            case 'boolean':
                return (
                    <div>
                        <span>{t('no')}</span>
                        <Switch
                            className="switch"
                            onChange={(event) => {
                                handleChange(id, event.target.checked);
                            }}
                            checked={!!value}
                        />
                        <span>{t('yes')}</span>
                    </div>
                );
            case 'number':
                return (
                    <input
                        type="number"
                        className="input p-2 w-full "
                        onChange={(event) => {
                            handleChange(id, event.target.value);
                        }}
                        value={value as number}
                    />
                );
            case 'string':
                return (
                    <input
                        type="text"
                        className="input p-2 w-full "
                        onChange={(event) => {
                            handleChange(id, event.currentTarget.value);
                        }}
                        value={value as string}
                    />
                );
            case 'date':
                return (
                    <input
                        type="date"
                        lang="en-EN"
                        className="input p-2 w-full "
                        onChange={(event) => {
                            handleChange(id, event.target.value);
                        }}
                        value={value as string}
                    />
                );
            case 'textarea':
                if (typeof value === 'string') {
                    return (
                        <MDEditor
                            onChange={(value) => {
                                handleChange(id, value as string);
                            }}
                            value={value}
                        />
                    );
                }
                break;
            default:
                return <></>;
        }
    };

    return { getFieldInput, customFields };
};

export default useItemCustomField;
