import React, { useContext } from 'react';
import './Button.css';
import { ThemeContext } from '../../App';

export function Button(props) {
    const theme = useContext(ThemeContext);
    const {action, text} = props;
  return (
    <div >
      <button className={`button-${theme}`} onClick={action} >{text}</button>
    </div>
  )
}
