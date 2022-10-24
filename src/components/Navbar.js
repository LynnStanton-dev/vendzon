import Cart from "../img/cart-outline.svg"
import Search from "../img/search-var-solid.svg"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <div className="topLeftLogo">Vendzon</div>
            </Link>
            <div className="search">
                <select>
                    <option value="all">All</option>
                    <option value="phone">Phone</option>
                </select>
                <input className="searchBar" placeholder="What are you looking for?" />
                <img className="searchBtn" src={Search} alt="Search" />
            </div>
            <Link to="/cart">
                <img className="cart" src={Cart} alt="Cart" />
            </Link>
        </nav>
    )
}