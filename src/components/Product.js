import { useState } from "react"

export default function Product({ product }) {
    const [curr, setCurr] = useState(0)


    return (
        <div className="product">
            <div className="productImages">
                <div className="sideImages">
                    {product.img.map(image => <img key={product.img.indexOf(image)} src={image} alt={product.title} onMouseEnter={(e) => setCurr(product.img.indexOf(image))} />)}
                </div>

                <img className="mainImage" src={product.img[curr]} alt={product.title + " Picture " + (product.img.indexOf(product.img[curr]) + 1)} />
            </div>
        </div>
    )
}