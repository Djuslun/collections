import { Button } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import Container from 'ui/container';
import SearchInput from './searchInput.tsx/searchInput';

function SearchMenu() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleClearValue = () => {
        setValue('');
    };

    const handleSearch = () => {
        setOpen(false);
        navigate(ClientUrls.search, { state: value });
        setValue('');
    };

    return (
        <>
            <Button className="button border-with-shadow" onClick={() => setOpen(true)}>
                <SearchIcon />
            </Button>
            <SwipeableDrawer
                anchor="top"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Container>
                    <div className="bg-main min-w-screen min-h-20 flex items-center justify-end">
                        <div className="flex items-center gap-2">
                            <Button
                                className="hover:scale-125 transition-all"
                                onClick={() => handleClearValue()}
                            >
                                <CloseIcon fontSize="small" />
                            </Button>
                            <SearchInput
                                handleSearchInputChange={handleSearchInputChange}
                                value={value}
                            />

                            <Button
                                className="button disabled:bg-gray-300 dark:disabled:bg-gray-800"
                                disabled={!value.trim()}
                                onClick={() => handleSearch()}
                            >
                                <SearchIcon color="inherit" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwipeableDrawer>
        </>
    );
}

export default SearchMenu;
