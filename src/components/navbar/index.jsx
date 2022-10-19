import "./style.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  let counterValue = useSelector((state) => state.counterStore.counter);
  let cartCount = useSelector((store) => store.cartStore.cartCount);

  let appearCounter = "";
  if (counterValue > 0) {
    appearCounter = (
      <div className="bg-danger text-light fw-bold w-25 text-center rounded-circle position-absolute start-50 top-0 translate-middle">
        {counterValue}$
      </div>
    );
  }
  let appearCartCount = "";
  if (cartCount > 0) {
    appearCartCount = (
      <div className="bg-danger text-light fw-bold text-center w-100 rounded-circle position-absolute start-100 top-0 translate-middle">
        {cartCount}
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid p-3 position-fixed d-flex justify-content-between align-items-center bg-info">
        <h2 className="text-light fw-bold">
          <Link to="/" className="text-light">
            Logo
          </Link>
        </h2>
        <ul className="list d-flex justify-content-around align-items-center gap-3">
          <Link to="/">
            <li className="text-light fw-bold fs-3">Home</li>
          </Link>
          <Link to="/shop">
            <li className="text-light fw-bold fs-3">Shop</li>
          </Link>
          <Link to="/about">
            <li className="text-light fw-bold fs-3">About</li>
          </Link>
          <Link to="/counter" className="position-relative">
            {appearCounter}
            <li className="text-light fw-bold fs-3">Support Us</li>
          </Link>
          <Link to="/cart" className="position-relative">
            {appearCartCount}
            <li className="text-light fs-3">
              <BsCart4 />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
