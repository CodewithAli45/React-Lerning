import React from 'react';
import { UserInfo } from './UserInfo';

export function Admin() {
    const myStyle = {
        marginTop : "30px",
        paddingBottom: '20px',
        textAlign: 'center',
    }
  return (
    <div>
      <h2 style={myStyle}>This is the Admin Page which contains list of user Profile with ID</h2>
      <UserInfo />
    </div>
  )
}
