import { FieldProps } from 'formik';
import { Option, Tag } from 'ts/interfaces';

interface ISelectProps
    extends FieldProps,
        Omit<ISelectFormikField<TSelectComponent>, 'component'> {}

interface ICreatableSelectProps
    extends FieldProps,
        Omit<ICreatebleSelectFormikField<TSelectComponent>, 'component'> {}

interface IInputProps
    extends FieldProps,
        Omit<IInputFormikField<TBaseComponent>, 'component'> {}

type TBaseComponent = ({ field, form }: IInputProps) => JSX.Element;
type TSelectComponent = ({ field, form }: ISelectProps) => JSX.Element;
type TCreatableSelectComponent = ({ field, form }: ICreatableSelectProps) => JSX.Element;

interface IBaseFormikField {
    name: string;
    label: string;
    id: string;
}

interface IInputFormikField<T> extends IBaseFormikField {
    placeholder?: string;
    component: T;
}

interface ISelectFormikFieldBase<T> extends IBaseFormikField {
    component: T;
    placeholder: string;
}

interface ISelectFormikField<T> extends ISelectFormikFieldBase<T> {
    options: Option[];
}

interface ICreatebleSelectFormikField<T> extends ISelectFormikFieldBase<T> {
    options: Tag[];
}

export type {
    IBaseFormikField,
    ISelectFormikField,
    TBaseComponent,
    IInputFormikField,
    TSelectComponent,
    ISelectProps,
    IInputProps,
    ICreatebleSelectFormikField,
    ICreatableSelectProps,
    TCreatableSelectComponent,
};
