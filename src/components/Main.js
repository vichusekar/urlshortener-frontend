import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

function Main() {

    let navigate = useNavigate()
    let [data, setData] = useState([])

    let handlegetUrl = async () => {

        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/all`)
            if (res.status === 200) {

                setData(res.data.url)
            }
        } catch (error) {
            toast.error(error.response.data.error || error.data.response.message)
        }

    }

    useEffect(() => {
        handlegetUrl()
    }, [])

    return <>
        <div className='shortened-title'>
            <h1>Shortened URL</h1>
        </div>

        <div className='table-wrapper'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>URL</th>
                        <th>ShortenedURL</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => {
                            return <tr key={e._id}>
                                <td>{i + 1}</td>
                                <td>{e.origUrl}</td>
                                <td>{e.shortUrl}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </div>
        <Button className='btn-primary' onClick={() => navigate('/url-shorten')}>Back</Button>


    </>
}

export default Main
