import React from 'react';
import { FormsHooks } from '../hooks/FormHooks';

export function Forms() {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    // const submitHandler = (e) => {
    //     console.log(firstName, lastName); // after submitting the form will reload, so to stop page from reload, we use prevent default.
    //     e.preventDefault();
    //     // also after submiting the data in input remains still there, we have to remove after submitting. by reseting to initial state
    //     setFirstName("");
    //     setLastName("");
    // }

    const [firstName, bindFirstName, restFirstName] = FormsHooks();
    const [lastName, bindLastName, restLastName] = FormsHooks();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(firstName, lastName);
        restFirstName();
        restLastName();

    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="fname">First Name</label>
            <input 
                id="fname" 
                {...bindFirstName}
            />
        </div>
        <div>
            <label htmlFor="lname">Last Name</label>
            <input 
                id="lname" 
                {...bindLastName}
            />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
