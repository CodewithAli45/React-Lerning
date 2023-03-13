import React from 'react';
import ReactDOM from 'react-dom';

function Child2({action}) {
    console.log("Child is", action);
  return ReactDOM.createPortal(<button onClick={action}>Button</button>, 
        document.getElementById('copy'));
  
}

export default React.memo(Child2);