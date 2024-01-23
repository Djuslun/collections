import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { clearUser, setIsAdminToFalse } from 'store/slices/userSlice';
import { useAppDispath } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';

const useErrorHandle = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispath();

    const handleError = (error: FetchBaseQueryError) => {
        console.log(error);
        if (error.status === 401) {
            navigate(ClientUrls.homePage);
            dispatch(clearUser());
        }
        if (error.status === 403) {
            navigate(ClientUrls.homePage);
            dispatch(setIsAdminToFalse());
        }
    };

    return handleError;
};

export default useErrorHandle;
