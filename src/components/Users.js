import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/UserList.css";
import './images/icon.webp'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
   <h2 className="header2 pageee">Users List</h2>
  
  
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Users</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col"> Users ID</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><img src={require('./images/icon.webp')} alt={user.name} width="24" height="24" /></td>
            <td style={{fontWeight: 'bold'}}>{user.name}</td>
            <td style={{ color: 'blue' }}>{user.email}</td>
            <td>{user._id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


  );
};

export default Users;




