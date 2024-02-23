import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/user/login', { username, password });
      console.log(response)
    } catch (err) {
      console.log(err)
  
    }
  }







  

  return (
    <div>
      <h1>Login</h1>
      <div className="form-wrapper"> {/* Add a wrapper around the form groups */}
        <Form className='form'>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Button className='button' variant="dark">Dark</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
