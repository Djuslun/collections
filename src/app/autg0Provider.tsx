import { Auth0Provider } from '@auth0/auth0-react';
import { WithChidlren } from 'ts/interfaces';
import AuthTokenWrapper from './authTokenWrapper';

function AuthProvider({ children }: WithChidlren) {
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH_0_DOMAIN as string}
            clientId={process.env.REACT_APP_AUTH_0_CLIENT_ID as string}
            authorizationParams={{
                redirect_uri: window.location.origin,
                audience: `${process.env.REACT_APP_AUTH_0_AUDIENCE}`,
                scope: 'openid profile email',
            }}
        >
            <AuthTokenWrapper>{children}</AuthTokenWrapper>
        </Auth0Provider>
    );
}

export default AuthProvider;
