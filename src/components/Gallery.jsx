import { Link } from "react-router-dom";
import logementJSON from "../data/logements.json"

function Gallery() {

    return (
        <section className="gallery">
            <div className="gallery__container">
                {logementJSON.map((logement) => (
                    <article className="gallery__article" key={logement.id}>
                        <Link className="gallery__article__link" to={`/logement/${logement.id}`}>
                            <img className="gallery__article__img" src={logement.cover} alt="appartement" />
                            <div className="gallery__article__darken"></div>
                            <p className="gallery__article__title">{logement.title}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Gallery