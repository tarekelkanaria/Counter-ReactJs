import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

const Details = () => {
  const params = useParams();

  useEffect(() => {
    getDetails();
  }, []);
  const [product, setProduct] = useState({});
  const getDetails = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <div className="details">
      <div className="container">
        <h1 className="text-dark text-center mb-5">Details</h1>
        <div className="box d-flex justify-content-between ">
          <div className="w-25">
            <img src={product.image} alt="" className="w-100" />
          </div>
          <div className="w-50">
            <h2 className="text-info">{product.title}</h2>
            <p className="text-black-50">{product.category}</p>
            <p className="text-muted">{product.description}</p>
            <p className="text-primary text-center">{product.price} EGP</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
