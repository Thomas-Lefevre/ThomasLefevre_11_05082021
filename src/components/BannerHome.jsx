/* eslint-disable jsx-a11y/img-redundant-alt */
import backgroundImage from '../assets/homeBannerImage.svg';
import backgroundImageMobile from '../assets/homeBannerImageMobile.svg'

function BannerHome() {
    const catchPhrase = "Chez vous, partout et ailleurs"

    return (
        <section className='homeBanner'>
            <img className='homeBanner__img' src={backgroundImage} alt="Image de fond du slogan" />
            <img className='homeBanner__img--mobile' src={backgroundImageMobile} alt="Image de fond du slogan" />
            <div className='homeBanner__darken'></div>
            <h2 className='homeBanner__catchPhrase'>{catchPhrase}</h2>
        </section>
    )
}

export default BannerHome