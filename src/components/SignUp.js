import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

function SignUp() {
  let navigate = useNavigate()

  let handleSignup = async (e)=>{
    e.preventDefault()

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    
    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, data)
      if(res.status === 200)
      {
        toast.success(res.data.message)
        navigate('/sign-in')
      }
    } catch (error) {
      toast.error(error.response.data.error || error.response.data.message)
      console.log(error)
      
    }
  }

  return <>
  <div className='signup-title'>
    <h1>SignUp</h1>
  </div>
    <div className='signup-wrapper'>
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default SignUp
