import React from 'react';
import {useParams} from 'react-router-dom'

export function UserProfile() {
  const myStyle = {
    marginTop : "30px",
    paddingBottom: '20px',
    textAlign: 'center',
}
  const {id} = useParams();
  return (
    <div>
      <h2 style={myStyle}>User Id is : {id}</h2>
    </div>
  )
}
