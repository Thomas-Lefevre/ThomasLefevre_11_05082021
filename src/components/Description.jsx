import starRed from "../assets/StarRed.svg"
import starGray from "../assets/StarGray.svg"
import dropdown from "../assets/flecheDropdown.svg"

function Description() {
    const titre = "Cozy loft on the Canal Saint-Martin"
    const localisation = "Paris, Île-de-France"
    const proprietaire = "Alexandre Dumas"
    const description = "Description"
    const equipements = "Équipements"
    return (
        <section className="description">
            <div className="principalInformation">
                <div className="principalInformation__appartement">
                    <h2 className="principalInformation__appartement__name">{titre}</h2>
                    <p className="principalInformation__appartement__localisation">{localisation}</p>
                    <ul className="principalInformation__appartement__tagList">
                        <li className="principalInformation__appartement__tagList__tag"><p className="principalInformation__appartement__tagList__tagName">Cozy</p></li>
                        <li className="principalInformation__appartement__tagList__tag"><p className="principalInformation__appartement__tagList__tagName">Canal</p></li>
                        <li className="principalInformation__appartement__tagList__tag"><p className="principalInformation__appartement__tagList__tagName">Paris 10</p></li>
                    </ul>
                </div>
                <div className="principalInformation__landlord">
                    <div className="principalInformation__landlord__information">
                        <p className="principalInformation__landlord__information__name">{proprietaire}</p>
                        <div className="principalInformation__landlord__information__img"></div>
                    </div>
                    <div className="principalInformation__landlord__rate">
                        <img className="principalInformation__landlord__rate__img" src={starRed} alt="" />
                        <img className="principalInformation__landlord__rate__img" src={starRed} alt="" />
                        <img className="principalInformation__landlord__rate__img" src={starRed} alt="" />
                        <img className="principalInformation__landlord__rate__img" src={starGray} alt="" />
                        <img className="principalInformation__landlord__rate__img" src={starGray} alt="" />
                    </div>
                </div>
            </div>
            <div className="dropdownDescription">
                <div className="dropdownDescription__description">
                    <div className="dropdownDescription__description__header">
                        <p className="dropdownDescription__description__header__name">{description}</p>
                        <img className="dropdownDescription__description__header__arrow" src={dropdown} alt="" />
                    </div>
                    <div className="dropdownDescription__description__content">
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                    </div>
                </div>
                <div className="dropdownDescription__equipements">
                    <div className="dropdownDescription__equipements__header">
                        <p className="dropdownDescription__equipements__header__name">{equipements}</p>
                        <img className="dropdownDescription__equipements__header__arrow" src={dropdown} alt="" />
                    </div>
                    <div className="dropdownDescription__equipements__content">
                        <ul>
                            <li>Climatisation</li>
                            <li>Wi-Fi</li>
                            <li>Cuisine</li>
                            <li>Espace de travail</li>
                            <li>Fer a repasser</li>
                            <li>Sèche-cheveux</li>
                            <li>Cintres</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description