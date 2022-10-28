import Navbar from "./components/Navbar"
import Explore from "./components/Explore"
import Cart from "./components/Cart"
import Product from "./components/Product"
import { Routes, Route, Link, useParams } from "react-router-dom"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "Harman Kardon Onyx Studio 4",
      price: 12.34,
      img: ["https://unsplash.it/1920/1080/"],
      soldOut: false,
      inSlideshow: true
    },
    {
      id: 1,
      title: "foo",
      price: 56.78,
      img: ["https://unsplash.it/1920/1080"],
      soldOut: false,
      inSlideshow: true
    }
  ])

  const { id } = useParams()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={
          <>
            <h1>You're wrong here!</h1>
            <Link to="/">Back home</Link>
          </>
        } />
        <Route path="/" element={<Explore products={products} setProducts={setProducts} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product id={id} product={products[0]} />} />
      </Routes>
    </div>
  )
}

export default App
