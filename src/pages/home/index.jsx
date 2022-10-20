import { useSelector } from "react-redux";
import "./style.css";

const Home = () => {
  let counterValue = useSelector((state) => state.counterStore.counter);
  return (
    <div className="home-wrapper">
      <h1 className="text-uppercase pt-5 text-center text-light">
        {" "}
        Welcome to your shop
      </h1>
      <div className="text-center text-light fw-bold p-5">
        <p>People Support us with {counterValue} $</p>
      </div>
    </div>
  );
};
export default Home;
