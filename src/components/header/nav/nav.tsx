import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';

function Nav() {
    const { t } = useTranslation('translation', { keyPrefix: 'header.nav' });

    const activeClass = ({ isActive }: { isActive: boolean }): string =>
        `${isActive ? 'text-blue-600' : ''} nav-link`;

    return (
        <nav className="hidden md:flex items-center gap-2 ">
            <NavLink className={activeClass} to={ClientUrls.homePage}>
                {t('homePage')}
            </NavLink>
            <NavLink className={activeClass} to={ClientUrls.collections}>
                {t('collectionsPage')}
            </NavLink>
        </nav>
    );
}

export default Nav;
