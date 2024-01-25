import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'store/useRedux';
import { ClientUrls } from 'ts/enums';

function Nav() {
    const { t } = useTranslation('translation', { keyPrefix: 'header.nav' });
    const { isAdmin } = useAppSelector((store) => store.user);
    const activeClass = ({ isActive }: { isActive: boolean }): string =>
        `${isActive ? 'nav-link--active' : ''} nav-link`;

    return (
        <nav className="hidden lg:flex items-center gap-2 ">
            <NavLink className={activeClass} to={ClientUrls.homePage}>
                {t('homePage')}
            </NavLink>
            <NavLink className={activeClass} to={ClientUrls.collections}>
                {t('collectionsPage')}
            </NavLink>
            {isAdmin && (
                <NavLink className={activeClass} to={ClientUrls.admin}>
                    {t('admin')}
                </NavLink>
            )}
        </nav>
    );
}

export default Nav;
