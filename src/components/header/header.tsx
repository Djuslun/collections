import { useAppSelector } from 'store/useRedux';
import Logo from 'components/logo/logo';
import Container from 'ui/container';
import AuthButton from './authButton/authButton';
import BurgerMenu from './burgerMenu/burgerMenu';
import ColorModeButton from './colorModeButton/colorModeButton';
import LanguageSwitch from './languageSwitch/languageSwitchButton';
import Nav from './nav/nav';
import ProfilePageButton from './profilePageButton/profilePageButton';

function Header() {
    const { user } = useAppSelector((store) => store.user);

    return (
        <header className="bg-main border-b border-gray-400 shadow-md shadow-slate-400 py-2">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <Nav />
                    </div>
                    <div className="flex items-center gap-2">
                        <LanguageSwitch />
                        <ColorModeButton />
                        <div className="gap-2 hidden lg:flex">
                            {user?.sub && <ProfilePageButton />}
                            <AuthButton />
                        </div>
                        <BurgerMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
