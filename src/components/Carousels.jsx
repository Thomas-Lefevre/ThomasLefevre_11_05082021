import { useState } from "react"
import leftArrow from "../assets/leftArrow.svg"
import rightArrow from "../assets/rightArrow.svg"


function Carousels({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0)
    const picturesLength = pictures.length

    const nextPicture = () => { setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1) }
    const previousPicture = () => { setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1) }

    return (
        <section className="carousel">
            {picturesLength === 1 ?
                <img className="carousel__img" src={pictures[currentPicture]} alt="logement" /> :
                <div className="carousel__container">
                    <img className="carousel__container__img" src={pictures[currentPicture]} alt="logement" />
                    <img className="carousel__container__leftArrow" src={leftArrow} onClick={previousPicture} alt="precedent" />
                    <img className="carousel__container__rightArrow" src={rightArrow} onClick={nextPicture} alt="suivant" />
                    <p className="carousel__container__index">{currentPicture + 1} / {picturesLength}</p>
                </div>
            }
        </section>
    )
}

export default Carousels