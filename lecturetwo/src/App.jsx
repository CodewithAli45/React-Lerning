import React, { createContext, useEffect, useState } from 'react';
import {Forms} from './components/Forms/Forms'
import { Button } from './components/Button/Button';
import './App.css';

const CurrentTheme = localStorage.getItem('theme');


const initialTheme = CurrentTheme ? CurrentTheme : 'light';
export const ThemeContext = createContext();

export function App() {
  const [theme, setTheme] = useState(initialTheme);
  const togleTheme = () => {
    console.log('Ali and Babita');
    theme === 'light' ? setTheme('dark') : setTheme('light');

  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])
  return (
    <ThemeContext.Provider value={theme}>

      <div className={`app-${theme}`}>
        <Forms />
        <Button action={togleTheme} text={"Toggle"} />
      </div>

    </ThemeContext.Provider>
  )
}

