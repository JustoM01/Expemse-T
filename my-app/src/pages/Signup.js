import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Signup.css";
import Button from 'react-bootstrap/Button';

const Signup = () => {
  return (
   

   
<div>
    <h1>
        Sign Up
        
    </h1>

    <span class="material-symbols-outlined">
settings_accessibility
</span>
 <div className='form'>
 <Form>   
    <Form.Group className="input" controlId="exampleForm.ControlTextarea1">
        <Form.Label>UserName</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>

      <Form.Group className="input" controlId="exampleForm.ControlTextarea1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>

      <Form.Group className="input" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>

      <Button className="button" variant ="light">Submit</Button>



 </Form>         
    </div>
    </div>   
  )
}

export default Signup