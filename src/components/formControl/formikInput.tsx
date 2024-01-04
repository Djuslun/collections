import { ChangeEvent } from 'react';
import { IInputProps } from './types';

function FormikInput({ field, form, placeholder }: IInputProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        form.setFieldValue(field.name, event.target.value);
    };

    return (
        <input
            className="input p-2 w-full "
            value={field.value}
            onChange={handleChange}
            onBlur={field.onBlur}
            id={field.name}
            placeholder={placeholder}
        />
    );
}

export default FormikInput;
