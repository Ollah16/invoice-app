import React, { useState } from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isToggle, handleToggle] = useState(false)

    return (
        <Navbar>
            <Container className='navBar_container'>
                <Col className='navBrandCol'>
                    <Navbar.Brand className='text-white'>
                        <Link to="/" className="text-decoration-none text-white">Invoice System</Link>
                    </Navbar.Brand>
                </Col>
                <Col className={`authenticate-col`}>
                    <ul>
                        <li><span>Help</span></li>
                        <li><span>Invoice Guide</span></li>
                        <li><Link to="/auth/login" className="text-decoration-none text-black rounded-pill bg-light px-3 py-1">Login </Link></li>
                    </ul>
                </Col>

                <Col className='navToggleBurger'>
                    <span className={`${isToggle ? 'active' : ''}`} onClick={() => handleToggle(!isToggle)}><GiHamburgerMenu /></span>
                </Col>
            </Container>

            <Container className={`navRoutes ${isToggle ? 'collapsed' : ''}`}>

                <ul>
                    <li><hr></hr></li>
                    <li><span>Help</span></li>
                    <li><span>Invoice Guide</span></li>
                    <li><hr></hr></li>
                    <li><Link to={'/auth/login'} className="text-decoration-none text-white text-decoration-underline-hover">Sign In</Link></li>
                    <li><Link to={'/auth/signup'} className="text-decoration-none text-white link-underline-opacity-100-hover">Sign Up</Link></li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default NavBar