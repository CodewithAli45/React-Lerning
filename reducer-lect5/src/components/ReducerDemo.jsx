import React, { useReducer } from 'react';
import { reducer, initalState } from '../utils/reducer';


export function ReducerDemo() {
  const [countobj, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <h2>Count -: {countobj.count}</h2>
      <button onClick={() => dispatch({type: 'INCREMENT', value : 10})}>Increase</button>
      <button onClick={() => dispatch({type : 'DECREMENT', value : 9.8})}>Decrease</button>
      <button onClick={() => dispatch({type : 'RESET', value : 15.6})}>Reset</button>
    </div>
  )
}
