import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ForgotPassword() {

    let navigate = useNavigate()
    let params = useParams()

    let handlePassword = async (e) => {
        e.preventDefault()

        let data = {
            email: e.target.email.value
        }

        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/forgot-password/${params.id}`, data)
            if (res.status === 200) 
            {
                toast.success(res.data.message)
                navigate('/loading')

            }

        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }

    }

    return <>
    <div className='f-title'>
        <h1>Forgot Password</h1>
    </div>
        <div className='fpassword-wrapper'>
            <Form onSubmit={handlePassword} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter email</Form.Label>
                    <Form.Control type="email" placeholder="Enter valid email" name='email' />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ borderRadius: '10px', marginLeft: '100px', width: '70px', cursor: 'pointer' }} >
                    Submit
                </Button>
            </Form>
        </div>
    </>
}

export default ForgotPassword
