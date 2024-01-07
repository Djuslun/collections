import { ReactNode } from 'react';
import Loader from './loader';

function LoaderWrapper({
    children,
    isLoading,
}: {
    children: ReactNode;
    isLoading: boolean;
}) {
    if (isLoading) {
        return <Loader isLoading />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}

export default LoaderWrapper;
