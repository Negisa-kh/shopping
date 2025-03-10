import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./about/About";
import Footer from './footer/Footer';
import SignIn from "./sign in/SignIn";
import Contact from "./contect/Contact";
import Navbar from "./component/Navbar";
import Cart from "./cart/Cart";
import { CartProvider } from "./cart/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contect" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign in" element={<SignIn />} />
          </Routes>
          <Footer/>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
