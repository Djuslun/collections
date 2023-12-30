import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ProfilePageButton() {
    const { t } = useTranslation('translation', { keyPrefix: 'header' });

    return (
        <Link to="/profile">
            <Button className="text-button button border-with-shadow">
                {t('profile')}
            </Button>
        </Link>
    );
}

export default ProfilePageButton;
