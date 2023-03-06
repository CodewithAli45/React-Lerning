import React, { useEffect, useRef } from 'react'

export function FocusInput() {
    const inputref = useRef(null);
    useEffect(() => {
        inputref.current.focus();
    }, [])
  return (
    <div>
      <div style={{margin: 10}}>
        <label style={{padding: 10}} htmlFor='username'>Username</label>
        <input ref={inputref} type={"text"} id={"username"} />
      </div>
      <div style={{margin: 10}}>
        <label style={{padding: 10}} htmlFor='password'>Password</label>
        <input type={"password"} id={"password"} />
      </div>
    </div>
  )
}
