import React, { useState } from 'react'
import '../styles/App.css';
// import ToDo from './ToDo';

function ToDo(props) {
  const {id,action, createdAt} = props;
  // const [inp, setInp] = useState("");

  return (<tr>
    <td>
      <p>{id}</p>
    </td>
    <td>
      <input onChange={action} />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}


function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const [reverseOrder, setReverseOrder] = useState(true);
  
  const handleReverse = () => {
    setReverseOrder(!reverseOrder);
  }

  return (
    <div id="main">
      <button onClick={handleReverse}>Reverse</button>
      <table>
        <tbody>
          {
            reverseOrder ?
            <div>
              <ToDo id={todos[0].id} action={(e) => e.target.value} createdAt={todos[0].createdAt} /> 
              <ToDo id={todos[1].id} action={(e) => e.target.value} createdAt={todos[1].createdAt} />
            </div>
            :
            <div>
              <ToDo id={todos[1].id} action={(e) => e.target.value} createdAt={todos[1].createdAt} />
              <ToDo id={todos[0].id} action={(e) => e.target.value} createdAt={todos[0].createdAt} /> 
              
            </div>

          }
          
        </tbody>
      </table>
    </div>
  )
}


export default App;