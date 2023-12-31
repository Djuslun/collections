import { AppState, RedirectLoginOptions } from '@auth0/auth0-react';
import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';

function LoginButton({
    loginWithRedirect,
}: {
    loginWithRedirect: (options?: RedirectLoginOptions<AppState>) => Promise<void>;
}) {
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
