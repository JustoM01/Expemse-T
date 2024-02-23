import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Container } from 'react-bootstrap';
import "./Nav.css"



const Nav = () => {


    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="home" className="home-icon">
                        Home
                    </Navbar.Brand>
                </Container>


                <Container>
                    <Navbar.Brand href="signup" className='signup-icon'>
                        Signup
                    </Navbar.Brand>
                </Container>

                <Container>
                    <Navbar.Brand href="login" className='login-icon'>
                        Login
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Nav; 