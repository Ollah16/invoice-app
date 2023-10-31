import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import SmXsDisplay from './smxsDisplay';
import LgMdDisplay from './lgmdDisplayPage';


const HomePage = ({
    state,
    handleSignOut,
    handleLogo,
    handleDownload,
    handleCustomInputs,
    handleDeleteRow,
    handleAddRow,
    handleCustomInput,
    handleInputs,
    handleDataInp,
    handleInputsBtn,
    handleNavigation
}) => {

    const handleAuth = () => {
        if (!state.isLogged) {
            handleNavigation(`/authenticate/${'nav'}`)
        } else { handleSignOut() }
    }


    return (<Container className='invoice-homepage' fluid>
        <Navbar>
            <Container>
                <Col lg={4} className='text-start'>
                    <Navbar.Brand href="#home" className='text-white'>Invoice Generator</Navbar.Brand>
                </Col>
                <Col lg={4} className='text-end authenticate-col-btn'>
                    <button onClick={() => handleAuth()}>
                        {!state.isLogged ? 'login/signup' : 'signout'}
                    </button>
                </Col>
            </Container>
        </Navbar>

        <Col className='d-block d-md-none'>
            <SmXsDisplay
                handleLogo={handleLogo}
                state={state}
                handleCustomInputs={handleCustomInputs}
                handleDataInp={handleDataInp}
                handleDeleteRow={handleDeleteRow}
                handleAddRow={handleAddRow}
                handleInputs={handleInputs}
                handleCustomInput={handleCustomInput}
                handleDownload={handleDownload}
                handleInputsBtn={handleInputsBtn}
            />
        </Col>

        <Col className='d-none d-md-block'>
            <LgMdDisplay
                handleLogo={handleLogo}
                handleNavigation={handleNavigation}
                state={state}
                handleCustomInputs={handleCustomInputs}
                handleDataInp={handleDataInp}
                handleDeleteRow={handleDeleteRow}
                handleAddRow={handleAddRow}
                handleInputs={handleInputs}
                handleCustomInput={handleCustomInput}
                handleDownload={handleDownload}
                handleInputsBtn={handleInputsBtn} />
        </Col>


        <footer className='footer-container'>
            < Row className="invoice-footer" >
                <Col lg={12} className="text-center">
                    <p>&copy; {new Date().getFullYear()} Invoice Generator. All Rights Reserved.</p>
                </Col>
            </Row >
        </footer>
    </Container >)
}
export default HomePage;