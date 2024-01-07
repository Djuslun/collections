import Logo from 'components/logo/logo';
import Container from 'ui/container';

function Footer() {
    return (
        <div className=" border-b border-gray-400 shadow-md shadow-slate-400 rotate-180">
            <footer className="bg-main py-2 rotate-180">
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Logo />
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;
