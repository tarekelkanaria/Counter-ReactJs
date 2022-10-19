import Counter from "../counter/Counter";
import CounterActions from "../counter-actions/CounterActions";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

const CounterContainer = () => {
  let counterValue = useSelector((state) => state.counterStore.counter);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };
  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        <Counter result={counterValue} />
      </div>
      <div>
        <CounterActions
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      </div>
    </>
  );
};
export default CounterContainer;
