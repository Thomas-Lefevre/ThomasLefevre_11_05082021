import dropdown from "../assets/flecheDropdown.svg";

function DropdownAPropos() {
    const fiabilitéContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securiteContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <section className='dropdownAPropos'>
            <div className="dropdownAPropos__dropdown">
                <div className="dropdownAPropos__dropdown__header">
                    <p className="dropdownAPropos__dropdown__header__name">Fiabilité</p>
                    <img className="dropdownAPropos__dropdown__header__arrow" src={dropdown} alt="flèche d'ouverture du dropdown fiabilité" />
                </div>
                <div className="dropdownAPropos__dropdown__content">
                    <p>{fiabilitéContent}</p>
                </div>
            </div>
            <div className="dropdownAPropos__dropdown">
                <div className="dropdownAPropos__dropdown__header">
                    <p className="dropdownAPropos__dropdown__header__name">Respect</p>
                    <img className="dropdownAPropos__dropdown__header__arrow" src={dropdown} alt="flèche d'ouverture du dropdown fiabilité" />
                </div>
                <div className="dropdownAPropos__dropdown__content">
                    <p>{respectContent}</p>
                </div>
            </div>
            <div className="dropdownAPropos__dropdown">
                <div className="dropdownAPropos__dropdown__header">
                    <p className="dropdownAPropos__dropdown__header__name">Service</p>
                    <img className="dropdownAPropos__dropdown__header__arrow" src={dropdown} alt="flèche d'ouverture du dropdown fiabilité" />
                </div>
                <div className="dropdownAPropos__dropdown__content">
                    <p>{serviceContent}</p>
                </div>
            </div>
            <div className="dropdownAPropos__dropdown">
                <div className="dropdownAPropos__dropdown__header">
                    <p className="dropdownAPropos__dropdown__header__name">Sécurité</p>
                    <img className="dropdownAPropos__dropdown__header__arrow" src={dropdown} alt="flèche d'ouverture du dropdown fiabilité" />
                </div>
                <div className="dropdownAPropos__dropdown__content">
                    <p>{securiteContent}</p>
                </div>
            </div>
        </section>
    )
}

export default DropdownAPropos