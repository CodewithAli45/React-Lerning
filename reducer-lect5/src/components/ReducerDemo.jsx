import React, { useReducer } from 'react';
import { reducer, initalState } from '../utils/reducer';



export function ReducerDemo(props) {
  const [countobj, dispatch] = useReducer(reducer, initalState);
  return (
    <>
    
    <div>
      <input type="number" value={countobj.input} onChange={(e) => dispatch({type : 'ADD', value : (e.target.value)})}/>
      <h2>Input-: {countobj.input}</h2>
      {/* below count shall increase on basis of input */}
      <h2>Count -: {countobj.count}</h2> 
      <button onClick={() => dispatch({type: 'INCREMENT', value : parseInt(countobj.input)})}>Increase</button>
      <button onClick={() => dispatch({type : 'DECREMENT', value : 9.8})}>Decrease</button>
      <button onClick={() => dispatch({type : 'RESET', value : 15.6})}>Reset</button>

      {props.children}

    </div>
    </>
  )
}
