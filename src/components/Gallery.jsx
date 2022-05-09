import { Link } from "react-router-dom";

function Gallery() {
    const titre = "Titre de la location";

    return (
        <section className="gallery">
            <div className="gallery__container">
                <article className="gallery__article">
                    <Link className="gallery__article__link" to="/">
                        <div className="gallery__article__img"></div>
                        <div className="gallery__article__darken"></div>
                        <p className="gallery__article__title">{titre}</p>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link className="gallery__article__link" to="/">
                        <div className="gallery__article__img"></div>
                        <div className="gallery__article__darken"></div>
                        <p className="gallery__article__title">{titre}</p>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link className="gallery__article__link" to="/">
                        <div className="gallery__article__img"></div>
                        <div className="gallery__article__darken"></div>
                        <p className="gallery__article__title">{titre}</p>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link className="gallery__article__link" to="/">
                        <div className="gallery__article__img"></div>
                        <div className="gallery__article__darken"></div>
                        <p className="gallery__article__title">{titre}</p>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link className="gallery__article__link" to="/">
                        <div className="gallery__article__img"></div>
                        <div className="gallery__article__darken"></div>
                        <p className="gallery__article__title">{titre}</p>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link className="gallery__article__link" to="/">
                        <div className="gallery__article__img"></div>
                        <div className="gallery__article__darken"></div>
                        <p className="gallery__article__title">{titre}</p>
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default Gallery