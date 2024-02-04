import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('/api/user');
      setUsers(response.data); // Assuming the API returns an array of user objects
      console.log(users)
    } catch (err) {
      console.error(err);
      setUsers([]);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Fetch Users</button>

      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <hr />
        </div>
      ))}


      
    </div>
  );
};

export default User;
