import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Container } from 'react-bootstrap';



const Display = () => {


return (
    <>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/img/home-icon.svg"
                        width="10"
                        height="10"
                        className="d-inline-block align-top"
                    />{''}
                    Home
                </Navbar.Brand>
            </Container>

            <Container>
                <Navbar.Brand href="#signup">
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="10"
                        height="10"
                        className="d-inline-block align-top"
                    />{''}
                    Signup
                </Navbar.Brand>
            </Container>

            <Navbar.Brand href="#login">
                <img
                    alt=""
                    src="/img/logo.svg"
                    width="10"
                    height="10"
                    className="d-inline-block align-top"
                />{''}
                Login
            </Navbar.Brand>
        </Navbar>
    </>
);
}

export default Display; 