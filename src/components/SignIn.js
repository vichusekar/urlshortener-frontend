import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';


function SignIn() {
  let navigate = useNavigate()

  let handleSignin = async (e) => {
    e.preventDefault()

    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, data)
      if(res.status === 200)
      {
        sessionStorage.setItem('token', res.data.token)
        toast.success(res.data.message)
        navigate('/url-shorten')
      }
    } catch (error) {
      toast.error(error.response.data.error || error.response.data.message)
      console.log(error)
    }
  }
  

  return <>
   <div className='signin-title'>
    <h1>SignIn</h1>
  </div>
    <div className='signin-wrapper'>
    <Form onSubmit={handleSignin}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>

      <p className='f-password' onClick={()=>navigate('/forgot-password')}>Forgot password</p>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </div>
  </>
}

export default SignIn
