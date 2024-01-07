/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';

interface DataRequiredProps<T> {
    children: (data: T) => ReactNode;
    data: T | undefined;
    isSuccess: boolean;
}

function DataRequired<T>({ children, data, isSuccess }: DataRequiredProps<T>) {
    if (!data) {
        return <Navigate to={ClientUrls.homePage} />;
    }

    return <>{isSuccess && children(data)}</>;
}

export default DataRequired;
