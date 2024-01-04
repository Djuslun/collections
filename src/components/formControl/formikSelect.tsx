import Select, { SingleValue } from 'react-select';
import { Option } from 'ts/interfaces';
import { ISelectProps } from './types';

function FormikSelect({ field, form, options, placeholder }: ISelectProps) {
    const handleChange = (option: SingleValue<Option>) => {
        form.setFieldValue(field.name, option?.value);
    };

    const getValue = () => options.find((option) => option.value === field.value);

    return (
        <Select
            value={getValue()}
            onChange={handleChange}
            options={options}
            onBlur={field.onBlur}
            name={field.name}
            inputId={field.name}
            isSearchable
            placeholder={placeholder}
            className="react-select-container react-select-styles"
            classNamePrefix="react-select"
        />
    );
}

export default FormikSelect;
