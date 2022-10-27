import { useState, useEffect } from "react"

export default function Explore({ products }) {
    const slideshow = products.filter(product => product.inSlideshow)
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            slideshow.length - 1 === curr ? setCurr(0) : setCurr(curr + 1)
        }, 10000)
    }, [curr, slideshow.length])

    return (
        <div className="explore">
            <div className="slideshow">
                <button onClick={() => curr > 0 ? setCurr(curr - 1) : setCurr(slideshow.length - 1)} className="prev">&lt;</button>
                <button onClick={() => slideshow.length - 1 === curr ? setCurr(0) : setCurr(curr + 1)} className="next">&gt;</button>
                <div className="background">
                    <img src={slideshow[curr].img} alt={slideshow[curr].title} />
                    <div>
                        <span>{slideshow[curr].title}</span>
                        <span>{slideshow[curr].price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}