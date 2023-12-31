import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

function AuthButton() {
    const { isAuthenticated } = useAuth0();

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
}

export default AuthButton;
