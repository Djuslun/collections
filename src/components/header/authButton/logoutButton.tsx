import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';

function LogoutButton() {
    const { logout } = useAuth0();
    const { t } = useTranslation('translation', { keyPrefix: 'header' });

    return (
        <Button
            className="button border-with-shadow text-button"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
            {t('logout')}
        </Button>
    );
}

export default LogoutButton;
