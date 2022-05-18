import Header from '../components/Header';
import Banner from '../components/BannerAPropos';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

function APropos() {

    const fiabilitéContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securiteContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <div className='pageContainer'>
            <Header />
            <div className="contentWrap">
                <Banner />
                <section className='dropdownAPropos'>
                    <div className='dropdownAPropos__dropdown'>
                        <Dropdown dropdownContent="Fiabilité">{fiabilitéContent}</Dropdown>
                    </div>
                    <div className='dropdownAPropos__dropdown'>
                        <Dropdown dropdownContent="Respect">{respectContent}</Dropdown>
                    </div>
                    <div className='dropdownAPropos__dropdown'>
                        <Dropdown dropdownContent="Service">{serviceContent}</Dropdown>
                    </div>
                    <div className='dropdownAPropos__dropdown'>
                        <Dropdown dropdownContent="Sécurité">{securiteContent}</Dropdown>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default APropos;
