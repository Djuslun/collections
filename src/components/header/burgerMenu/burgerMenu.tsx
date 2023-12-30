/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import useBurgerMenu from './useBurgerMenu';

function BurgerMenu() {
    const { t } = useTranslation('translation', { keyPrefix: 'header' });
    const { handleKeyDown, open, setOpen } = useBurgerMenu();

    const activeClass = ({ isActive }: { isActive: boolean }): string =>
        `${
            isActive ? 'text-blue-600' : ''
        } text-xl lg:text-2xl p-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-opacity-50 focus-visible:outline-none focus-visible:border-b border-gray-800 dark:border-gray-100`;

    return (
        <div className="md:hidden">
            <Button className="button border-with-shadow" onClick={() => setOpen(true)}>
                <MenuIcon />
            </Button>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div className="dark:bg-gray-800 dark:text-white bg-slate-200 min-h-screen">
                    <nav
                        onClick={() => setOpen(false)}
                        onKeyDown={handleKeyDown}
                        className="w-[250px] flex flex-col"
                    >
                        <NavLink className={activeClass} to="/">
                            {t('nav.homePage')}
                        </NavLink>
                        <NavLink className={activeClass} to="/collections">
                            {t('nav.collectionsPage')}
                        </NavLink>
                        <NavLink className={activeClass} to="/profile">
                            {t('profile')}
                        </NavLink>
                        <Button className=" text-xl lg:text-2xl p-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-opacity-50 text-left focus-visible:outline-none focus-visible:border-b border-gray-800 dark:border-gray-100">
                            Log out
                        </Button>
                    </nav>
                </div>
            </SwipeableDrawer>
        </div>
    );
}

export default BurgerMenu;
