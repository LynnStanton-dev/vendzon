import { useState, useEffect } from "react"

export default function Explore(props) {
    const { products } = props
    const slideshow = products.filter(product => product.inSlideshow && product.soldOut)
    const [curr, setCurr] = useState(0)

    useEffect(
        () => setInterval(
            () => {
                try {
                    setCurr(curr + 1)
                } catch (err) {
                    setCurr(0)
                }
            }, 10000
        ), [curr]
    )

    return (
        <div className="explore">
            <div>
                {products.map(product => <li key={product.id}>{product.title}</li>)}
            </div>
            <div className="slideshow">
                <button className="prev">&lt;</button>
                <button className="next">&gt;</button>
                <div className="background">
                    <img src={slideshow[curr].img} alt={slideshow[curr].title} />
                    {slideshow[curr].title}
                </div>
            </div>
        </div>
    )
}