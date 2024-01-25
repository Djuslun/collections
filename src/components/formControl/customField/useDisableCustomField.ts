import { FieldProps } from 'formik';
import { useEffect, useRef } from 'react';
import { ICustomField } from 'ts/interfaces';

type TFieldType = FieldProps['field'];

type TUseDisableCustomField = (id: string) => boolean;

const useDisableCustomField = (field: TFieldType): TUseDisableCustomField => {
    const customFieldsRef = useRef<ICustomField[]>([]);
    useEffect(() => {
        customFieldsRef.current = field.value;
    }, []);

    const getDisabledStatus: TUseDisableCustomField = (id) =>
        customFieldsRef.current?.some((customField) => customField?.id === id) || false;

    return getDisabledStatus;
};

export default useDisableCustomField;
