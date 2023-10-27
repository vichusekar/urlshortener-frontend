import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Home() {

  let navigate = useNavigate()

  return <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/sign-up')}>URL Shortener</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => navigate('/sign-in')}>SignIn</Nav.Link>
          <Nav.Link onClick={() => navigate('/sign-up')}>SignUp</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>


}

export default Home
