/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';
import AuthButton from '../authButton/authButton';
import useBurgerMenu from './useBurgerMenu';

function BurgerMenu() {
    const { t } = useTranslation('translation', { keyPrefix: 'header' });
    const { handleKeyDown, open, setOpen } = useBurgerMenu();
    const { isAdmin } = useAppSelector((store) => store.user);

    const activeClass = ({ isActive }: { isActive: boolean }): string =>
        `${isActive ? 'text-blue-600' : ''} nav-link burger-menu-link`;

    return (
        <div className="lg:hidden">
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
                        <NavLink className={activeClass} to={ClientUrls.homePage}>
                            {t('nav.homePage')}
                        </NavLink>
                        <NavLink className={activeClass} to={ClientUrls.collections}>
                            {t('nav.collectionsPage')}
                        </NavLink>
                        {isAdmin && (
                            <NavLink className={activeClass} to={ClientUrls.admin}>
                                {t('nav.admin')}
                            </NavLink>
                        )}
                        <NavLink className={activeClass} to={ClientUrls.profile}>
                            {t('profile')}
                        </NavLink>
                        <AuthButton />
                    </nav>
                </div>
            </SwipeableDrawer>
        </div>
    );
}

export default BurgerMenu;
