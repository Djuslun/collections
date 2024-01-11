import { CustomFieldTypes } from 'ts/types';

type CollectionThemesTypes = 'work' | 'hobby' | 'coins' | 'other' | 'books';
const collectionThemes: CollectionThemesTypes[] = [
    'work',
    'hobby',
    'coins',
    'books',
    'other',
];

const customFielsTypes: CustomFieldTypes[] = [
    'string',
    'textarea',
    'number',
    'boolean',
    'date',
];

export { customFielsTypes, collectionThemes };
