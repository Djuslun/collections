/* eslint-disable react/jsx-no-useless-fragment */
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

function AuthButton() {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

    return (
        <>
            {isAuthenticated ? (
                <LogoutButton logout={logout} />
            ) : (
                <LoginButton loginWithRedirect={loginWithRedirect} />
            )}
        </>
    );
}

export default AuthButton;
