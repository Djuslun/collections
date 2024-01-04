import { FieldProps } from 'formik';
import { Option } from 'ts/interfaces';

interface ISelectProps
    extends FieldProps,
        Omit<ISelectFormikField<TSelectComponent>, 'component'> {}

interface IInputProps
    extends FieldProps,
        Omit<IInputFormikField<TBaseComponent>, 'component'> {}

type TBaseComponent = ({ field, form }: IInputProps) => JSX.Element;
type TSelectComponent = ({ field, form }: ISelectProps) => JSX.Element;

interface IBaseFormikField {
    name: string;
    label: string;
    id: string;
}

interface IInputFormikField<T> extends IBaseFormikField {
    placeholder?: string;
    component: T;
}

interface ISelectFormikField<T> extends IBaseFormikField {
    component: T;
    options: Option[];
    placeholder: string;
}

export type {
    IBaseFormikField,
    ISelectFormikField,
    TBaseComponent,
    IInputFormikField,
    TSelectComponent,
    ISelectProps,
    IInputProps,
};
