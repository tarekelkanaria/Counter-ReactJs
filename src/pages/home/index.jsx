import { useSelector } from "react-redux";

const Home = () => {
  let counterValue = useSelector((state) => state.counterStore.counter);
  return (
    <div className="wrapper pt-5">
      <h1 className="text-uppercase pt-5"> Welcome to your shop</h1>
      <div className="text-center">
        <p>People Support us with {counterValue} $</p>
      </div>
    </div>
  );
};
export default Home;
