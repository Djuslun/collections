import MDEditor from '@uiw/react-md-editor';
import { FieldProps } from 'formik';

function FormikMDEditor({ field, form }: FieldProps) {
    const handleChange = (value: string | undefined): void => {
        form.setFieldValue(field.name, value);
    };

    return (
        <MDEditor
            value={field.value}
            onChange={handleChange}
            defaultTabEnable
            textareaProps={{ id: field.name }}
        />
    );
}

export default FormikMDEditor;
