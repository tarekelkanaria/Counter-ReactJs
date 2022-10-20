import { useSelector } from "react-redux";
import emptyCartIcon from "../../assets/images/empty-cart.svg";
import "./style.css";

const Cart = () => {
  let cartProducts = useSelector((store) => store.cartStore.cartList);
  let emptyCart = "";
  if (cartProducts.length === 0) {
    emptyCart = (
      <div className="container pt-5 text-center">
        <img src={emptyCartIcon} alt="" />
      </div>
    );
  }
  return (
    <div className="wrapper pt-5 text-center">
      <h2 className="pt-5 mb-5 text-center text-primary fw-bold">My Cart</h2>
      {emptyCart}
      <div>
        {cartProducts.map((singleProduct) => {
          return (
            <div
              key={singleProduct.id}
              className="container d-flex justify-content-around align-items-center bg-info border border-success px-2 py-0"
            >
              <div>
                <h3 className="text-light fw-bold fst-italic">Count</h3>
                <h2>{cartProducts.indexOf(singleProduct) + 1}</h2>
              </div>
              <div>
                <h3 className="text-light fw-bold fst-italic">Image</h3>
                <div className="poster">
                  <img
                    src={singleProduct.image}
                    alt=""
                    className="w-100 h-100 rounded-circle"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-light fw-bold fst-italic">Name</h3>
                <h2>{singleProduct.title}</h2>
              </div>
              <div>
                <h3 className="text-light fw-bold fst-italic">Category</h3>
                <h2>{singleProduct.category}</h2>
              </div>
              <div>
                <h3 className="text-light fw-bold fst-italic">Price</h3>
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
