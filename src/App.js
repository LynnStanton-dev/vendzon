import Navbar from "./components/Navbar"
import Explore from "./components/Explore"
import Cart from "./components/Cart"
import { Routes, Route, Link } from "react-router-dom"

function App() {
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
        <Route path="/" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
