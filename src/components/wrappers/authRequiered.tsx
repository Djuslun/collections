/* eslint-disable react/jsx-no-useless-fragment */
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';
import { WithChidlren } from 'ts/interfaces';

function AuthRequired({ children }: WithChidlren) {
    const { user } = useAppSelector((store) => store.user);

    if (!user?.sub) {
        return <Navigate to={ClientUrls.homePage} />;
    }

    return <>{children}</>;
}

export default AuthRequired;
