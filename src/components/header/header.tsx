import Logo from 'components/logo/logo';
import Container from 'ui/container';
import ColorModeButton from './colorModeButton/colorModeButton';
import LanguageSwitch from './languageSwitch/languageSwitchButton';
import Nav from './nav/nav';

function Header() {
    return (
        <header className=" bg-slate-200 border-b border-gray-400 shadow-md shadow-slate-400 py-2 dark:bg-gray-800">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <Nav />
                    </div>
                    <div className="flex items-center gap-2">
                        <LanguageSwitch />
                        <ColorModeButton />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
