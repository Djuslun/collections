import { ErrorMessage, Field } from 'formik';
import { ReactElement } from 'react';
import { IBaseFormikField } from './types';

function FormikField<T extends IBaseFormikField>({ label, name, id, ...props }: T) {
    return (
        <div className="relative top-0">
            <label htmlFor={id} className="relative form-label">
                {label}
            </label>
            <Field name={name} {...props} />
            <ErrorMessage name={name}>
                {(msg: string): ReactElement => (
                    <div className="text-red-500 absolute top-0 right-0">{msg}</div>
                )}
            </ErrorMessage>
        </div>
    );
}

export default FormikField;
