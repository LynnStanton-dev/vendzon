import pic1 from "../img/xiaomi-mi-12-pro-pic1.jpg"

export default function Explore() {
    return (
        <div className="explore">
            <div className="slideshow">
                <div className="prev">&lt;</div>
                <div className="next">&gt;</div>
                <div>
                    <img src={pic1} alt="Xiaomi Mi 12 Pro (front and behind)" />
                </div>
            </div>
        </div>
    )
}