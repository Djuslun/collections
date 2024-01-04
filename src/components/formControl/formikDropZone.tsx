/* eslint-disable import/no-extraneous-dependencies */
import { FieldProps } from 'formik';
import { useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useTranslation } from 'react-i18next';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function FormikDropZone({ field, form }: FieldProps) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });

    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {
        setFile(file);
    };

    useEffect(() => {
        if (field?.name) {
            form?.setFieldValue(field.name, file);
        }
    }, [file]);

    return (
        <FileUploader
            classes="dropZone dropZone-styles"
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            label={t('dropZone')}
        />
    );
}

export default FormikDropZone;
