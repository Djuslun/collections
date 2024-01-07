import { ReactNode } from 'react';

interface DatabaseModel {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

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

interface CollectionSubmitFormValues extends Omit<CollectionFormValues, 'image'> {
    imageUrl: string | undefined;
}

interface CollectionRequestBody extends CollectionSubmitFormValues {
    userId: string;
    createdBy: string;
}

interface Collection extends DatabaseModel, CollectionRequestBody {
    itemCount: number;
}

export type {
    WithChidlren,
    Option,
    ICustomField,
    CollectionFormValues,
    Collection,
    CollectionRequestBody,
};
