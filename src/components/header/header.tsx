import ColorModeButton from 'components/colorModeButton/colorModeButton';
import Container from 'ui/container';

function Header() {
    return (
        <header className=" bg-slate-200 border-b border-gray-400 shadow-md shadow-slate-400 py-2 dark:bg-gray-800">
            <Container>
                <div className="flex justify-end">
                    <ColorModeButton />
                </div>
            </Container>
        </header>
    );
}

export default Header;
