import { ReactNode } from 'react';
import { CustomFieldTypes } from 'ts/types';

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

export interface Tag extends Option, Pick<DatabaseModel, '_id'> {}

interface ICustomField {
    id: string;
    label: string;
    type: CustomFieldTypes;
}

export interface ICustomFieldItem extends ICustomField {
    value: number | string | boolean | Date;
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

export interface ItemFormValues {
    title: string;
    description: string;
    tags: string[];
    customFields: ICustomFieldItem[];
    image: File | null;
}

export interface ItemSubmitFormValues extends Omit<ItemFormValues, 'image'> {
    imageUrl: string | undefined;
}

export interface ItemRequestBody extends ItemSubmitFormValues {
    userId: string;
    createdBy: string;
    collectionId: string;
    collectionTitle: string;
    likes: string[];
}

export interface Item extends DatabaseModel, ItemRequestBody {}

export interface CommentFormValues {
    comment: string;
}

export interface CommentRequestBody extends CommentFormValues {
    itemId: string | undefined;
    userId: string | undefined;
    userName: string | undefined;
    userAvatar: string | undefined;
}

export interface IComment extends DatabaseModel, CommentRequestBody {}

export type {
    WithChidlren,
    Option,
    ICustomField,
    CollectionFormValues,
    Collection,
    CollectionRequestBody,
};
