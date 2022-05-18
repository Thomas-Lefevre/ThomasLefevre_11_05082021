import logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'


function Header() {
    const accueil = "ACCUEIL"
    const aPropos = "A PROPOS "

    return (
        <header className='header'>
            <Link to="/"><img src={logo} alt="Logo du site Kasa" className='header__logo' /></Link>
            <nav className='header__nav'>
                <ul className='header__ul'>
                    <li><Link to="/" className='header__ul--a'>{accueil}</Link></li>
                    <li><Link to="/apropos" className='header__ul--a'>{aPropos}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header