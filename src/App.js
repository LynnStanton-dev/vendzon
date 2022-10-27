import Navbar from "./components/Navbar"
import Explore from "./components/Explore"
import Cart from "./components/Cart"
import { Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "Harman Kardon Onyx Studio 4",
      img: "https://unsplash.it/500/500",
      soldOut: false,
      inSlideshow: true
    },
  ])

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
      </Routes>
    </div>
  );
}

export default App;
