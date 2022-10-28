import Cart from "../img/cart-outline.svg"
import Search from "../img/search-var-solid.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [itemCount, setItemCount] = useState(0)


    return (
        <nav>
            <Link to="/">
                <div className="topLeftLogo">Vendzon</div>
            </Link>
            <div className="search">
                <input className="searchBar" placeholder="What are you looking for?" />
                <img className="searchBtn" src={Search} alt="Search" />
            </div>
            <Link to="/cart">
                <div className="cart">
                    <img src={Cart} alt="Cart" />
                    {Boolean(itemCount) && <span>{itemCount}</span>}
                </div>
            </Link>
        </nav>
    )
}