/* eslint-disable react/jsx-no-useless-fragment */
import { Backdrop, CircularProgress } from '@mui/material';

function Loader({ isLoading }: { isLoading: boolean }) {
    return (
        <>
            {isLoading && (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
        </>
    );
}

export default Loader;
