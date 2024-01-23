/* eslint-disable react/jsx-no-useless-fragment */
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';
import { WithChidlren } from 'ts/interfaces';

function AdminRoleRequired({ children }: WithChidlren) {
    const { isAdmin } = useAppSelector((store) => store.user);

    if (!isAdmin) {
        return <Navigate to={ClientUrls.homePage} />;
    }

    return <>{children}</>;
}

export default AdminRoleRequired;
