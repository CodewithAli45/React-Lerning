import React from 'react';
import { FocusInput } from './components/FocusInput';
import { ScrollDemo } from './components/ScrollDemo';
export function App() {
  return (
    <div style={{padding: 15, margin: 20}}>
      <h2>Introduction to refs-Hook</h2>
      {/* <FocusInput /> */}
      <ScrollDemo />
    </div>
  )
}
