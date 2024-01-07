import { Dispatch, SetStateAction } from 'react';
import { CollectionFormValues } from './interfaces';

type TSetState<T> = Dispatch<SetStateAction<T>>;

type THandleSubmitCollectionForm = (value: CollectionFormValues) => Promise<void>;

export type { TSetState, THandleSubmitCollectionForm };
