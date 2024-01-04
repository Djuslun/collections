import { useTranslation } from 'react-i18next';
import { Option } from 'ts/interfaces';

const useTranslateSelectOptions = (optionValues: string[], prefix: string): Option[] => {
    const { t } = useTranslation('translation', {
        keyPrefix: `${prefix}`,
    });

    return optionValues.map((value) => ({ value, label: t(value) }));
};

export default useTranslateSelectOptions