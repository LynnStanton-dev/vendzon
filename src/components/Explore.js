import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Explore({ products }) {
    const slideshow = products.filter(product => product.inSlideshow)
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            slideshow.length - 1 === curr ? setCurr(0) : setCurr(curr + 1)
        }, 5000)
    }, [curr, slideshow.length])

    return (
        <div className="explore">
            <div className="slideshow">
                <button onClick={() => curr > 0 ? setCurr(curr - 1) : setCurr(slideshow.length - 1)} className="prev">&lt;</button>
                <button onClick={() => slideshow.length - 1 === curr ? setCurr(0) : setCurr(curr + 1)} className="next">&gt;</button>
                <Link className="background" to={"/products/" + slideshow[curr].id}>
                    <img src={slideshow[curr].img[0]} alt={slideshow[curr].title} />
                    <div>
                        <span className="slideshowTitle">{slideshow[curr].title}</span>
                        <span className="slideshowPrice">{slideshow[curr].price} €</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}