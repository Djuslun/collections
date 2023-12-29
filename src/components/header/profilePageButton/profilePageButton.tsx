import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ProfilePageButton() {
    const { t } = useTranslation('translation', { keyPrefix: 'header' });

    return (
        <Link to="/profile">
            <Button className="p-3 text-[18px] leading-none dark:text-white border border-gray-300 rounded-md shadow-sm shadow-slate-300 dark:border-gray-500 bg-white dark:bg-gray-700">
                {t('profile')}
            </Button>
        </Link>
    );
}

export default ProfilePageButton;
