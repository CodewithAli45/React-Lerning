import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Forms } from './Forms';
import { Input } from './Input';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<h1>Not found</h1>} />
          <Route path="/" element={<h2>This is homepage.</h2>}/>
          <Route path='/form/:user/:id' element={<Forms />} />
          <Route path='/input' element={<Input />} />

          <Route path='/admin'>
            <Route index element={<h2>This is admin Page</h2>}/>
            <Route path='profile' element={<h3>Profile of admin</h3>}/>
          </Route >
        </Routes>
      </BrowserRouter>
    </div>
  )
}
