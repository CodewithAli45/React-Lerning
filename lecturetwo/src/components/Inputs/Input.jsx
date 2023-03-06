import React, { useContext } from 'react';
import './Input.css'
import { ThemeContext } from '../../App';

export function Input(props) {
  const theme = useContext(ThemeContext);
    const {label, type, placeholder} = props;
  return (
    <div>
      <label className={`label-${theme}`} htmlFor={`id-${label}`}>{label}</label>
      <input className={`input-${theme}`} type={type} id={`id-${label}`} placeholder={placeholder} />
    </div>
  )
}
