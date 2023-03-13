import React from 'react'

function Child1({age, name}) {
    console.log(`${name} age is - ${age}`);
  return (
    <div>
      <h2>{name} age is - {age}</h2>
    </div>
  )
}

export default React.memo(Child1)