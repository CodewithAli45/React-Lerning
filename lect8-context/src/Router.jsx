import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { App } from './App';
import { Home } from './components/Home/Home';

export function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}
