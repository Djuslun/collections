import { useAuth0 } from '@auth0/auth0-react/src';
import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';

function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    const { t } = useTranslation('translation', { keyPrefix: 'header' });

    return (
        <Button
            className="button border-with-shadow text-button"
            onClick={() => loginWithRedirect()}
        >
            {t('login')}
        </Button>
    );
}

export default LoginButton;
