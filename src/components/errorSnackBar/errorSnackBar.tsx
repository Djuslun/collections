import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import MuiSnackBar from '@mui/material/Snackbar';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setErrorMessage } from 'store/slices/errorSlice';
import { useAppDispath } from 'store/useRedux';

function ErrorSnackBar({ isOpen, message }: { isOpen: boolean; message: string }) {
    const [open, setOpen] = useState<boolean>(isOpen);
    const dispath = useAppDispath();
    const { t } = useTranslation('translation', {
        keyPrefix: 'error',
    });

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        dispath(setErrorMessage(''));
    };

    const action = (
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <div>
            <MuiSnackBar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={t(message) || ''}
                action={action}
            />
        </div>
    );
}

export default ErrorSnackBar;
