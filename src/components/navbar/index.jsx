import "./style.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
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
          <Link to="/counter">
            <li className="text-light fw-bold fs-3">Support Us</li>
          </Link>
          <Link to="/cart">
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
