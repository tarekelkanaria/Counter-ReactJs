import "./style.css";

const CounterActions = (props) => {
  return (
    <div className="wrapper d-flex justify-content-center align-items-center">
      <div className="controls">
        <button className="minus" onClick={props.decrementCount}>
          -
        </button>
        <button className="plus" onClick={props.incrementCount}>
          +
        </button>
      </div>
    </div>
  );
};
export default CounterActions;
