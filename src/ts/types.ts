import { Dispatch, SetStateAction } from 'react';

type TSetState<T> = Dispatch<SetStateAction<T>>;

// eslint-disable-next-line import/prefer-default-export
export type { TSetState };
