import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { setAccsesToken, setUser } from 'store/slices/userSlice';
import { useAppDispath } from 'store/useRedux';
import { IUser, WithChidlren } from 'ts/interfaces';
import LoaderWrapper from 'ui/loader/loaderWrapper';

function AuthTokenWrapper({ children }: WithChidlren) {
    const [isReady, setIsReady] = useState(false);
    const dispatch = useAppDispath();
    const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

    useEffect(() => {
        if (user) {
            dispatch(setUser(user as IUser));
        }
        if (isAuthenticated && !isLoading) {
            getAccessTokenSilently()
                .then((token) => dispatch(setAccsesToken(token)))
                .then(() => setIsReady(true));
        }
        if (!isAuthenticated && !isLoading) {
            setIsReady(true);
        }
    }, [isLoading]);

    return <LoaderWrapper isLoading={!isReady}>{children}</LoaderWrapper>;
}

export default AuthTokenWrapper;
