import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage';

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  )
    
}
