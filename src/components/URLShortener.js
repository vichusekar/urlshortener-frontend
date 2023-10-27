import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'

function URLShortener() {

    let navigate = useNavigate()

    let handleUrl = async (e) => {
        e.preventDefault()

        let data = {
            origUrl: e.target.origUrl.value
        }
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/shorten`,data)

            if(res.status === 200)
            {
                toast.success(res.data.message)
                navigate('/main')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error || error.response.data.message)
        }
    }
    return <>
    <div className='url-title'>
        <h1>URL Shortener</h1>
    </div>
        <div className='signin-wrapper'>

            <Form onSubmit={handleUrl}>

                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="url" placeholder="Enter your link" name='origUrl' />
                </Form.Group>

                <Button variant="primary" type="submit">Shorten</Button>

            </Form>

        </div>
    </>
}

export default URLShortener
