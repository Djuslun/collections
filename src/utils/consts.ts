import { CustomFieldTypes } from 'ts/types';

type CollectionThemesTypes =
    | 'work'
    | 'hobby'
    | 'coins'
    | 'books'
    | 'celebrities'
    | 'movies'
    | 'stamps'
    | 'other';

const collectionThemes: CollectionThemesTypes[] = [
    'work',
    'hobby',
    'coins',
    'books',
    'celebrities',
    'movies',
    'stamps',
    'other',
];

const customFielsTypes: CustomFieldTypes[] = [
    'string',
    'textarea',
    'number',
    'boolean',
    'date',
];

export { customFielsTypes, collectionThemes, CollectionThemesTypes };
