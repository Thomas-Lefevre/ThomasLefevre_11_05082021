import starRed from "../assets/StarRed.svg"
import starGray from "../assets/StarGray.svg"

function Stars({ rating }) {
    const ratingArray = [1, 2, 3, 4, 5]

    return (
        <div className="principalInformation__landlord__rate">
            {ratingArray.map((rank) => (
                rank <= rating ? <img key={rank} className="principalInformation__landlord__rate__img" src={starRed} alt="" />
                    : <img key={rank} className="principalInformation__landlord__rate__img" src={starGray} alt="" />
            ))}
        </div>
    )
}
export default Stars