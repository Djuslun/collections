import { ReactNode } from 'react';

interface WithChidlren {
    children: ReactNode;
}

interface Option {
    value: string;
    label: string;
}

interface ICustomField {
    id: string;
    label: string;
    type: string;
}

interface CollectionFormValues {
    title: string;
    description: string;
    collectionTheme: string;
    image: File | null;
    customFields: ICustomField[];
}

export type { WithChidlren, Option, ICustomField, CollectionFormValues };
