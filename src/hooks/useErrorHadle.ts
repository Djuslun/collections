/* eslint-disable consistent-return */
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { setErrorMessage } from 'store/slices/errorSlice';
import { clearUser, setIsAdminToFalse } from 'store/slices/userSlice';
import { useAppDispath } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';

const useErrorHandle = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispath();

    const handleError = (error: FetchBaseQueryError) => {
        if (error.status === 401) {
            navigate(ClientUrls.homePage);
            dispatch(clearUser());
            return dispatch(setErrorMessage('notAuth'));
        }
        if (error.status === 403) {
            navigate(ClientUrls.homePage);
            dispatch(setIsAdminToFalse());
            return dispatch(setErrorMessage('notAdmin'));
        }
        navigate(ClientUrls.homePage);
        return dispatch(setErrorMessage('unexpected'));
    };

    return handleError;
};

export default useErrorHandle;
