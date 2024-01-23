import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useValidationShema = () => {
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .trim()
            .max(30, t('validateMaxSymbols'))
            .required(t('validateRequired')),
        description: Yup.string().min(0, ''),
        collectionTheme: Yup.string().required(t('validateRequired')),
        customFields: Yup.array(),
    });

    return validationSchema;
};

export default useValidationShema;
