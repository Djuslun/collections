import { useState } from 'react';
import { v4 } from 'uuid';

export interface ICustomField {
    id: string;
    label: string;
    type: string;
}

const useCustomFields = (initialValue: ICustomField[]) => {
    const [customFields, setCustomFields] = useState<ICustomField[]>(initialValue);

    const addCusromField = () => {
        const newCustomField = {
            id: v4(),
            label: '',
            type: '',
        };
        setCustomFields((customFields) => [...customFields, newCustomField]);
    };

    const changeCustomField = (key: keyof ICustomField, value: string, id: string) => {
        setCustomFields((customFields) =>
            customFields.map((field) => {
                if (field.id === id) {
                    return { ...field, [key]: value };
                }
                return field;
            })
        );
    };

    const deleteCustomField = (id: string) => {
        setCustomFields((customFields) =>
            customFields.filter((field) => field.id !== id)
        );
    };

    return { customFields, addCusromField, changeCustomField, deleteCustomField };
};

export default useCustomFields;
