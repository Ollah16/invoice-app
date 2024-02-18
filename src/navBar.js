import React from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ toggleAuth,
    isNavToggle,
    handleToggle,
    handleNavigation }) => {

    return (
        <Navbar>
            <Container className='navBar_container'>
                <Col className='navBrandCol'>
                    <Navbar.Brand onClick={() => handleNavigation('/')} className='text-white'>Invoice System</Navbar.Brand>
                </Col>
                <Col className={`authenticate-col`}>
                    <ul>
                        <li><span>Help</span></li>
                        <li><span>Invoice Guide</span></li>
                        <li><button onClick={() => toggleAuth('signin')}>Sign In</button></li>
                        <li><button onClick={() => toggleAuth('signup')}>Sign Up</button></li>
                    </ul>
                </Col>

                <Col className='navToggleBurger'>
                    <span className={`${isNavToggle ? 'active' : ''}`} onClick={() => handleToggle(!isNavToggle)}><GiHamburgerMenu /></span>
                </Col>
            </Container>

            <Container className={`navRoutes ${isNavToggle ? 'collapsed' : ''}`}>

                <ul>
                    <li><hr></hr></li>
                    <li><span>Help</span></li>
                    <li><span>Invoice Guide</span></li>
                    <li><hr></hr></li>
                    <li><button onClick={() => toggleAuth('signin')}>Sign In</button></li>
                    <li><button onClick={() => toggleAuth('signup')}>Sign Up</button></li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default NavBar