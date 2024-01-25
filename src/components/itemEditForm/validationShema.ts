import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useValidationShema = () => {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });

    const validationSchema = Yup.object({
        title: Yup.string()
            .trim()
            .max(30, t('validateMaxSymbols'))
            .required(t('validateRequired')),
        description: Yup.string().min(0, ''),
        tags: Yup.array().min(1, t('validateRequired')),
        customFields: Yup.array(),
    });

    return validationSchema;
};

export default useValidationShema;
