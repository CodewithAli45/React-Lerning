import React from "react";
export default function ToDo(props) {
    const {id, value, createdAt} = props;

    return (<tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <input value={value} />
      </td>
      <td>
        <p>{createdAt}</p>
      </td>
    </tr>)
  }