import { Dispatch, SetStateAction } from 'react';
import { CollectionFormValues } from './interfaces';

type TSetState<T> = Dispatch<SetStateAction<T>>;

type THandleSubmitCollectionForm = (
    value: CollectionFormValues,
    userId: string,
    createdBy: string
) => Promise<void>;

export type { TSetState, THandleSubmitCollectionForm };
