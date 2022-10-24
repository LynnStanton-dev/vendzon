import Cart from "../img/cart-shopping-solid.svg"
import Search from "../img/magnifying-glass-solid.svg"

export default function Navbar() {
    return (
        <nav>
            <div className="topLeftLogo">Vendzon</div>
            <div className="search">
                <input placeholder="What are you looking for?" className="searchBar" />
                <img className="searchBtn" src={Search} alt="Search" />
            </div>
            <img className="cart" src={Cart} alt="Cart" />
        </nav>
    )
}