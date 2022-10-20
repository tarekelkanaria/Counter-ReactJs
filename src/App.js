import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Details from "./pages/shop/Details";
import CounterContainer from "./components/counter-container/CounterContainer";
import NotFound from "./pages/not-found";
import SigninForm from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Details />} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
