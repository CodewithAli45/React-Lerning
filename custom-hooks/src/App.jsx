import React from 'react';
// import { CounterOne } from './components/CounterOne';
import { CounterTwo } from './components/CounterTwo';
import {Forms} from './components/Forms';

export function App() {
  return (
    <div>
      {/* <CounterOne 
        initalValue={10} 
        incValue={2} 
        decVal={5} 
        resetVal={40} 
      /> */}

      {/* <CounterOne 
        // initalValue={100} 
        // incValue={12.35} 
        // decVal={15.0568} 
        // resetVal={250.00} 
      /> */}
      <CounterTwo /> 
      

      <Forms />
    </div>
  )
}
