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
        `${isActive ? 'text-blue-600' : ''} nav-link burger-menu-link`;

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
                <div className="bg-main min-h-screen">
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
                        <Button className="nav-link burger-menu-link text-left">
                            Log out
                        </Button>
                    </nav>
                </div>
            </SwipeableDrawer>
        </div>
    );
}

export default BurgerMenu;
