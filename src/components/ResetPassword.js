import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {

  let navigate = useNavigate()
  let params = useParams()

  let handleresetpassword = async (e) => {
    e.preventDefault()

    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/reset-password/${params.id}`, data)

      if (res.status === 200)
      {
        toast.success(res.data.message)
        navigate('/main')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return <>
  <div className='reset-title'>
    <h1>Reset Password</h1>
  </div>
    <div className='password-wrapper'>
      <Form onSubmit={handleresetpassword}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter New Password" name='password' />
        </Form.Group>

        <Button variant="primary" type="submit" >Submit</Button>

      </Form>
    </div>
  </>
}

export default ResetPassword
