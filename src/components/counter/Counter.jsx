import "./style.css";

const Counter = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <h2 className="result d-flex justify-content-center align-items-center">
        {props.result} $
      </h2>
      ;
    </div>
  );
};
export default Counter;
