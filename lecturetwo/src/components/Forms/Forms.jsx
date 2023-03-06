import React, { useContext } from 'react';
import {Input} from '../Inputs/Input';
import { ThemeContext } from '../../App';
import './Forms.css'

export function Forms() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`form-${theme}`}>
      <h2 className={`header-${theme}`}>Welcome to React Js</h2>
      <Input type={"text"} label={"Username"} placeholder={"Enter username"} />
      <Input type={"password"} label={"Password"} placeholder={"Enter passord"} />
      
      
    </div>

  )
}
