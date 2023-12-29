import headerLogo from 'assets/header_logo.png';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" className="text-2xl font-bold flex items-center leading-none">
            <img src={headerLogo} alt="logo" width={50} height={50} className="mr-2" />
            <span className="hidden md:block">The Collection</span>
        </Link>
    );
}

export default Logo;
