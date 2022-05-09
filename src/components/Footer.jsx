import logo from '../assets/logoFooter.svg'


function Footer() {
    const copyright = "© 2020 Kasa. All rights reserved"

    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img className='footer__logo__img' src={logo} alt="logo du site kasa" />
            </div>
            <p className='footer__copyright'>{copyright}</p>
        </footer>
    )
}

export default Footer