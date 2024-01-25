/* eslint-disable react/jsx-no-useless-fragment */
import { useAuth0 } from '@auth0/auth0-react';
import { useAppSelector } from 'store/useRedux';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

function AuthButton() {
    const { user } = useAppSelector((store) => store.user);
    const { logout, loginWithRedirect } = useAuth0();

    return (
        <>
            {user?.sub ? (
                <LogoutButton logout={logout} />
            ) : (
                <LoginButton loginWithRedirect={loginWithRedirect} />
            )}
        </>
    );
}

export default AuthButton;
