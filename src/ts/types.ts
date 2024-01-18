import { Dispatch, SetStateAction } from 'react';
import { CollectionFormValues, ItemFormValues } from './interfaces';

type TSetState<T> = Dispatch<SetStateAction<T>>;

type THandleSubmitCollectionForm = (value: CollectionFormValues) => Promise<void>;

type THandleSubmitItemForm = (value: ItemFormValues) => Promise<void>;

type CustomFieldTypes = 'string' | 'textarea' | 'number' | 'boolean' | 'date' | '';

type TUserRole = 'User' | 'Admin';

export type {
    TSetState,
    THandleSubmitCollectionForm,
    THandleSubmitItemForm,
    CustomFieldTypes,
    TUserRole,
};
