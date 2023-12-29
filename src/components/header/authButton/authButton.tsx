import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';

function AuthButton() {
    const { t } = useTranslation('translation', { keyPrefix: 'header' });

    return (
        <Button className="p-3 text-[18px] leading-none dark:text-white border border-gray-300 rounded-md shadow-sm shadow-slate-300 dark:border-gray-500 bg-white dark:bg-gray-700">
            {t('login')}
        </Button>
    );
}

export default AuthButton;
