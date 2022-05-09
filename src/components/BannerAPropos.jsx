/* eslint-disable jsx-a11y/img-redundant-alt */
import AProposBannerImage from '../assets/AProposBannerImage.svg';
import AProposBannerImageMobile from '../assets/AProposBannerImageMobile.svg'

function AProposBanner() {
    return (
        <section className='AProposBanner'>
            <img className='AProposBanner__img' src={AProposBannerImage} alt="Image de fond du slogan" />
            <img className='AProposBanner__img--mobile' src={AProposBannerImageMobile} alt="Image de fond du slogan" />
            <div className='AProposBanner__darken'></div>
        </section>
    )
}

export default AProposBanner