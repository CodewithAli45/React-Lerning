import React from 'react';
import './styles/App.css';
import { UserProfile } from './components/Homework-01/UserProfile';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Admin } from './components/Homework-01/Admin';

export function Main() {
  return (
        <HashRouter>
          <Routes>
            <Route path='/' element={<h1 className='app'>This is My Home Page</h1>}/>
            <Route path='*' element={<h1>404: Page not found</h1>}/>
            <Route path='/user/:id' element={<UserProfile />} />

            <Route path='/admin'>
              <Route index element={<Admin/ >} />
            </Route>
          </Routes>
          </HashRouter>  
  )
}
