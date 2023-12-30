import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';

function AuthButton() {
    const { t } = useTranslation('translation', { keyPrefix: 'header' });

    return (
        <Button className="button border-with-shadow text-button ">{t('login')}</Button>
    );
}

export default AuthButton;
