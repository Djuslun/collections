/* eslint-disable react/jsx-no-useless-fragment */
import { Navigate } from 'react-router-dom';
import { setErrorMessage } from 'store/slices/errorSlice';
import { useAppDispath, useAppSelector } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';
import { WithChidlren } from 'ts/interfaces';

function AdminRoleRequired({ children }: WithChidlren) {
    const { isAdmin } = useAppSelector((store) => store.user);
    const dispath = useAppDispath();

    if (!isAdmin) {
        dispath(setErrorMessage('notAdmin'));
        return <Navigate to={ClientUrls.homePage} />;
    }

    return <>{children}</>;
}

export default AdminRoleRequired;
