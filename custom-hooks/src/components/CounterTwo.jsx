import React from 'react';
import { InputHooks } from '../hooks/InputHooks';

export function CounterTwo() {
    // const {initalValue, incValue, decVal, resetVal} = props;
    // const [count, setCount] = useState(initalValue);

    // const increment = () => {
    //     setCount((prev) => prev + incValue);
    // };

    // const decrement = () => {
    //     setCount((prev) => prev - decVal);
    // };

    // const reset = () => {
    //     setCount(resetVal);
    // };
    const [count, increment, decrement, reset] = InputHooks(150, 15, 7, 25.35);
  return (
    <div style={{margin: 20}}>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
