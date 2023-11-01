import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IoCaretForward } from 'react-icons/io5'
import { MdOutlineArrowBack } from 'react-icons/md'

const RegisterPage = ({
    handleAuth,
    state,
    handleNavigation,
    handleDownload,
    handleMessage,
    handleCloseMessage,
    isDownloadButtonDisabled
}) => {

    let [isLogin, setLogin] = useState(true)
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let { page } = useParams()

    useEffect(() => {
        if (state.isLogged) return handleNavigation('/')
    }, [])

    useEffect(() => {
        if (state.isLogged && page) {
            if (page === 'nav') {
                handleNavigation('/');
            } else if (page === 'homepage') {
                handleDownload({ userSalesId: null, page });
            } else if (page === 'records') {
                handleNavigation(page);
            }
            page = null
        }
    }, [state.isLogged])


    const handleAuthentication = async (type) => {
        if (!email && !password) return handleMessage('inputs cant be blank')
        switch (type) {
            case 'signin':
                try {
                    const response = await axios.post('http://localhost:9080/authenticate/login', { email, password }, {
                        // const response = await axios.post('https://invoice-back-end.vercel.app/authenticate/login', { email, password }, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    const { accessToken } = response.data;
                    if (accessToken) {
                        handleAuth();
                        localStorage.setItem('accessToken', accessToken);
                        setPassword('');
                        setEmail('');
                    }
                } catch (err) {
                    console.error(err)
                }
                break;

            case 'signup':
                await axios.post('https://invoice-back-end.vercel.app/authenticate/register', { email, password }, {
                    // await axios.post('http://localhost:9080/authenticate/register', { email, password }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((response) => {
                    const { message } = response.data
                    if (message) {
                        setPassword('');
                        setEmail('');
                        setLogin(true);
                    }
                }).catch((err) => {
                    console.error(err)
                })
                break;
        }
    };



    return (<Container className='invoice-homepage' fluid>
        <Navbar>
            <Container>
                <Col lg={4} >
                    <Navbar.Brand href="#home" className='text-white'>Invoice Generator</Navbar.Brand>
                </Col>
            </Container>
        </Navbar>
        <Row>
            <Col lg={2} md={2} sm={4} xs={4} className='return-col'>
                <button onClick={() => handleNavigation(page)}> <MdOutlineArrowBack /><span>Back</span></button>
            </Col>
        </Row>
        {state.message && <Row className="justify-content-center my-1">
            <Col lg={3} md={4} sm={5} xs={6} className="message-col">
                <div><span>{state.message}</span> <button
                    onClick={() => handleCloseMessage()}>x</button></div>
            </Col>
        </Row>}

        <Row className="justify-content-center my-2">
            <Col lg={6} md={8} sm={10} xs={10} className="bg-white p-3 text-center">
                <h4>Sign in or register to securely store your invoices for easy access anytime, anywhere, whenever you need them</h4>
            </Col>
        </Row>
        <Row className="justify-content-center my-2">
            <Col lg={6} md={8} sm={10} xs={10} className="bg-white p-3">
                <div className="login-form">
                    <label className="d-block" htmlFor="email">Email</label>
                    <input
                        className="w-100"
                        id="email"
                        value={email}
                        type="email"
                        placeholder="Email"
                        onInput={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="login-form">
                    <label className="d-block" htmlFor="password">Password</label>
                    <input
                        className="w-100"
                        id="password"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onInput={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button
                        onClick={isLogin ? () => handleAuthentication('signin') : () => handleAuthentication('signup')}
                        className={isLogin ? "login-button" : "signup-button"}
                    >
                        {isLogin ? "Sign In" : 'Sign Up'}
                    </button>
                </div>
                {isLogin && (
                    <p className="signup-link">
                        New here?  <button onClick={() => setLogin(false)}>Register now</button>
                    </p>
                )}
            </Col>
        </Row>

        {
            !state.isLogged && state.total > 0 &&
            <Row className="justify-content-center">
                <Col lg={6} md={6} sm={10} xs={10} className="proceed-col">
                    <button
                        disabled={isDownloadButtonDisabled}
                        onClick={() => handleNavigation(`/download/${'proceed'}/${page}`)}>
                        <span>Proceed to download</span><IoCaretForward /><IoCaretForward />
                    </button>
                </Col>
            </Row>
        }

        <footer className='footer-container'>
            < Row className="invoice-footer" >
                <Col lg={12} className="text-center">
                    <p>&copy; {new Date().getFullYear()} Invoice Generator. All Rights Reserved.</p>
                </Col>
            </Row >
        </footer>
    </Container >
    )
}
export default RegisterPage