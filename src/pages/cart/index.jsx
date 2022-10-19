import { useSelector } from "react-redux";
import "./style.css";

const Cart = () => {
  let cartProducts = useSelector((store) => store.cartStore.cartList);
  return (
    <div className="wrapper pt-5 text-center">
      <h2 className="pt-5 text-center text-primary fw-bold">My Cart</h2>
      <div>
        {cartProducts.map((singleProduct) => {
          return (
            <div
              key={singleProduct.id}
              className="container d-flex justify-content-around align-items-center bg-info border border-success px-2 py-0"
            >
              <div>
                <h3 className="text-muted fst-italic">Count</h3>
                <h2>{cartProducts.indexOf(singleProduct) + 1}</h2>
              </div>
              <div>
                <h3 className="text-muted fst-italic">Image</h3>
                <div className="poster">
                  <img
                    src={singleProduct.image}
                    alt=""
                    className="w-100 h-100 rounded-circle"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-muted fst-italic">Name</h3>
                <h2>{singleProduct.title}</h2>
              </div>
              <div className="desc-wrapper">
                <h3 className="text-center text-muted fst-italic">
                  description
                </h3>
                <p className="desc w-100">{singleProduct.description}</p>
              </div>
              <div>
                <h3 className="text-muted fst-italic">Category</h3>
                <h2>{singleProduct.category}</h2>
              </div>
              <div>
                <h3 className="text-muted fst-italic">Price</h3>
                <h2>{singleProduct.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
