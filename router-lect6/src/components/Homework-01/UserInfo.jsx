import React from 'react';
import { Link } from 'react-router-dom';
import './Table.css';

export function UserInfo() {
  return (
    <div>
      <table className='table'>
        <thead>
            <tr>
                <th>Roll Number</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><Link to="/user/1">1</Link></td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td><Link to="/user/2">2</Link></td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td><Link to="/user/3">3</Link></td>
                <td>Bob Johnson</td>
            </tr>
            <tr>
                <td><Link to="/user/4">4</Link></td>
                <td>Alice Brown</td>
            </tr>
            <tr>
                <td><Link to="/user/5">5</Link></td>
                <td>Tom Wilson</td>

            </tr>
            <tr>
                <td><Link to="/user/6">6</Link></td>
                <td>Sara Lee</td>
            </tr>
            <tr>
                <td><Link to="/user/7">7</Link></td>
                <td>Mike Davis</td>
            </tr>
            <tr>
                <td><Link to="/user/8">8</Link></td>
                <td>Karen Jones</td>
            </tr>
            <tr>
                <td><Link to="/user/9">9</Link></td>
                <td>Timothy Brown</td>
            </tr>
            <tr>
                <td><Link to="/user/10">10</Link></td>
                <td>Emily Wilson</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}
