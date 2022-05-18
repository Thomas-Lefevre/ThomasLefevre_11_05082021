import Stars from "../components/Stars"
import Dropdown from "./Dropdown"

function Description({ logement }) {

    return (
        <section className="description">
            <div className="principalInformation">
                <div className="principalInformation__appartement">
                    <h2 className="principalInformation__appartement__name">{logement.title}</h2>
                    <p className="principalInformation__appartement__localisation">{logement.location}</p>
                    <ul className="principalInformation__appartement__tagList">
                        {logement.tags.map((tag) => (
                            <li key={tag} className="principalInformation__appartement__tagList__tag"><p className="principalInformation__appartement__tagList__tagName">{tag}</p></li>
                        ))}
                    </ul>
                </div>
                <div className="principalInformation__landlord">
                    <div className="principalInformation__landlord__information">
                        <p className="principalInformation__landlord__information__name">{logement.host.name}</p>
                        <img className="principalInformation__landlord__information__img" src={logement.host.picture} alt="profile propriétaire" />
                    </div>
                    <Stars rating={logement.rating} />
                </div>
            </div>
            <div className="dropdownSection">
                <div className="dropdownSection__dropdown">
                    <Dropdown dropdownContent="Description">
                        <p>{logement.description}</p>
                    </Dropdown>
                </div>
                <div className="dropdownSection__dropdown">
                    <Dropdown dropdownContent="Équipements">
                        <ul>
                            {logement.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </section>
    )
}

export default Description