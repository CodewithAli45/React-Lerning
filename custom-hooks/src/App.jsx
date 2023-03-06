import React from 'react';
import { CounterOne } from './components/CounterOne';
import { CounterTwo } from './components/CounterTwo';
export function App() {
  return (
    <div>
      <CounterOne 
        // initalValue={10} 
        // incValue={2} 
        // decVal={5} 
        // resetVal={0} 
      />

      {/* <CounterOne 
        // initalValue={100} 
        // incValue={12.35} 
        // decVal={15.0568} 
        // resetVal={250.00} 
      /> */}
      <CounterTwo />
    </div>
  )
}
