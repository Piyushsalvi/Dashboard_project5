import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/update.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const UpdateDelete = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
    .then(response => {
        setUsers(response.data);
      })
    .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting user with ID: ${id}`);
    axios.delete(`http://localhost:8000/api/users/deleteUser/${id}`)
    .then(response => {
        console.log(`Deleted user with ID: ${id}`);
        console.log('Response:', response);
        setUsers(prevUsers => prevUsers.filter(user => user._id!== id));
      })
    .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleUpdate = (id) => {
    setEditing(id);
  };

  const handleSubmitUpdate = (id, event) => {
    event.preventDefault();
    const updatedUserData = {
      name: event.target.name.value,
      email: event.target.email.value,
    };
    axios.patch(`http://localhost:8000/api/users/updateUser/${id}`, updatedUserData)
    .then(response => {
        console.log(`Updated user with ID: ${id}`, updatedUserData);
        setEditing(null);
        setUsers(prevUsers => prevUsers.map(user => user._id === id? {...user,...updatedUserData } : user));
      })
    .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div >
      <h2 className="header2 pageee">UPDATE/DELETE</h2>
  
        <table className='tableee'>
          <thead>
            <tr>
              <th>Users</th>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
  {users.map((user, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{user.name}</td>
      <td style={{ color: 'blue', fontStyle: 'italic' }}>{user.email}</td>
      <td className='tablefont2' >{user._id}</td>
      <td>
        {editing === user._id? (
          <form onSubmit={(event) => handleSubmitUpdate(user._id, event)}>
            <input  className="inpuuut" type="text" name="name" defaultValue={user.name} size="10" />
            <input  className="inpuuut" type="email" name="email" defaultValue={user.email} size="10" />
            <button type="submit" className="save-button">
              <FontAwesomeIcon icon={faSave} size="xs" />
            </button>
            <button className="cancel-button" onClick={() => setEditing(null)}>
              <FontAwesomeIcon icon={faTimes} size="xs" />
            </button>
          </form>
        ) : (
          <div className="action-button-container">
            <button className="edit-button" onClick={() => handleUpdate(user._id)}>
              <FontAwesomeIcon icon={faEdit} size="xs" />
            </button>
            <button className="delete-button" onClick={() => handleDelete(user._id)}>
              <FontAwesomeIcon icon={faTrash} size="xs" />
            </button>
          </div>
        )}
      </td>
    </tr>
  ))}
</tbody>
        </table>
 
    </div>
  );
};

export default UpdateDelete;