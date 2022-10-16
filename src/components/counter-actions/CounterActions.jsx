import "./style.css";

const CounterActions = (props) => {
  return (
    <>
      <div className="controls">
        <button className="minus" onClick={props.minus}>
          -
        </button>
        <button className="plus" onClick={props.plus}>
          +
        </button>
      </div>
    </>
  );
};
export default CounterActions;
