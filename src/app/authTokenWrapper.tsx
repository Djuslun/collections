import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { WithChidlren } from 'ts/interfaces';
import LoaderWrapper from 'ui/loader/loaderWrapper';
import { setAccsesToken } from 'store/slices/userSlice';
import { useAppDispath } from 'store/useRedux';

function AuthTokenWrapper({ children }: WithChidlren) {
    const [isReady, setIsReady] = useState(false);
    const dispatch = useAppDispath();
    const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
    useEffect(() => {
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
