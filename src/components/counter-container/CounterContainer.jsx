import Counter from "../counter/Counter";
import CounterActions from "../counter-actions/CounterActions";
import { useState } from "react";

const CounterContainer = () => {
  let [counterValue, setCounterValue] = useState(0);
  const increase = () => {
    setCounterValue(++counterValue);
  };
  const decrease = () => {
    setCounterValue(--counterValue);
  };
  return (
    <>
      <div>
        <Counter result={counterValue} />
      </div>
      <div>
        <CounterActions plus={increase} minus={decrease} />
      </div>
    </>
  );
};
export default CounterContainer;
