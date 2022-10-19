import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const Shop = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  if (products && products.length === 0) {
    return (
      <div className="loader w-25 mx-auto">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <div className="wrapper pt-5">
      <h1 className="pt-5 text-center text-primary">Our Products</h1>
      <div className="shop-list container bg-success border border-info d-flex flex-wrap p-2">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="item w-25 border border-info border-3 d-flex flex-column align-items-center justify-content-between"
            >
              <Link to={`/shop/${product.id}`}>
                <div className="poster w-75 mb-5">
                  <img
                    src={product.image}
                    alt=""
                    className="item-image rounded-3 border border-3 border-light h-100 w-100"
                  />
                </div>
              </Link>
              <h2 className="text-light text-center fw-bold">
                {product.title}
              </h2>
              <p className="display-5 text-muted m-0 bg-info text-center">
                {product.price} EGP
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
              <Link to={`/shop/${product.id}`}>
                <button type="button" className="btn btn-primary btn-lg">
                  See More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
