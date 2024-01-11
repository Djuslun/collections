import CreatableSelect from 'react-select/creatable';
import { ISelectProps } from './types';

function FormikCreatebleSelect({ field, form, options, placeholder }: ISelectProps) {
    //   const handleChange = (option: SingleValue<Option>) => {
    //     form.setFieldValue(field.name, option?.value);
    // };

    return (
        <CreatableSelect
            isClearable
            isMulti
            // value={getValue()}
            // onChange={handleChange}
            options={options}
            onBlur={field.onBlur}
            name={field.name}
            inputId={field.name}
            placeholder={placeholder}
            className="react-select-container react-select-styles"
            classNamePrefix="react-select"
        />
    );
}

export default FormikCreatebleSelect;
