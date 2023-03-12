import React from 'react';
import { ReducerDemo } from './components/ReducerDemo';
import { Border } from './components/Border';

export function App() {
  return (
    <div style={{margin: 20}}>
      <h3>Introduction to useReducer Hooks</h3>
      <Border>
        <ReducerDemo/>
      </Border>

    </div>
  )
}
