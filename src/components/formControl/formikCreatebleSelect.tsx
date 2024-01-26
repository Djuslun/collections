import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { ITag } from 'ts/interfaces';
import { ICreatableSelectProps } from './types';

function FormikCreatebleSelect({
    field,
    form,
    options,
    placeholder,
}: ICreatableSelectProps) {
    const [selectOptions, setSelectOptions] = useState(options);

    const getValue = (options: ITag[], ids: string[]) =>
        options.filter((tag) => ids.includes(tag._id));

    const handleCreate = (option: string) => {
        const newOption = { _id: option, value: option, label: option };
        form.setFieldValue(field.name, [...field.value, newOption._id]);
        setSelectOptions((current) => [...current, newOption]);
    };

    return (
        <CreatableSelect
            isClearable
            isMulti
            value={getValue(selectOptions, field.value)}
            onChange={(value) =>
                form.setFieldValue(
                    field.name,
                    value.map((tag) => tag._id)
                )
            }
            onCreateOption={handleCreate}
            options={selectOptions}
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
