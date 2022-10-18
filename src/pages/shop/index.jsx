import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
    <div className="wrapper pt-5">
      <h1 className="pt-5 text-center text-primary">Our Products</h1>
      <div className="shop-list container bg-success border border-info d-flex flex-wrap p-2">
        {products.map((product) => {
          return (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="item w-25 border border-info border-3 d-flex flex-column align-items-center justify-content-between"
            >
              <div className="poster mb-5">
                <img
                  src={product.image}
                  alt=""
                  className="item-image rounded-3 border border-3 border-light h-100 w-100"
                />
              </div>
              <h2 className="text-light text-center fw-bold">
                {product.title}
              </h2>
              <p className="display-5 text-muted m-0 bg-info text-center">
                {product.price} EGP
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
