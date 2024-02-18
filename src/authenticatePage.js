import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IoCaretForward } from 'react-icons/io5'
import FooterPage from "./footer";
import NavBar from "./navBar";
import { useControl } from "./useControl/useControl";
import ReturnBtn from "./returnBtn";

const RegisterPage = ({ state,
    isDownloadButtonDisabled,
    handleAuth,
    handleDownload,
    handleNavigation,
    handleMessage
}) => {


    let [isLogin, setLogin] = useState(true)
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let { page } = useParams()

    useEffect(() => {
        const footer_container = document.querySelector('.footer-container')
        footer_container.classList.add('fixed')
        const navRoutes = document.querySelector('.navRoutes')
        const navToggleBurger = document.querySelector('.navToggleBurger')
        const authenticate_col = document.querySelector('.authenticate-col')
        const navBrandCol = document.querySelector('.navBrandCol')
        navBrandCol.style.margin = '0px'
        navRoutes.style.display = 'none'
        navToggleBurger.style.display = 'none'
        authenticate_col.style.display = 'none'
    }, [])

    useEffect(() => {
        if (state.isLogged) return handleNavigation('/')
    }, [])

    useEffect(() => {
        if (state.isLogged && page) {
            if (page === 'nav') {
                handleNavigation('/');
            } else if (page === 'homepage') {
                handleDownload({ userSalesId: null, page });
            }
            page = null
        } else if (page === 'signup') {
            setLogin(false)
        } else if (page === 'signin') {
            setLogin(true)

        }
    }, [state.isLogged])

    const handleAuthentication = async (type) => {
        if (!email && !password) return handleMessage('inputs cant be blank')
        switch (type) {
            case 'signin':
                try {
                    // const response = await axios.post('http://localhost:9080/authenticate/login', { email, password }, {
                    const response = await axios.post('https://invoice-back-end.vercel.app/authenticate/login', { email, password }, {
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
                    handleMessage(err.response.data.error)
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
                        handleMessage(message)
                        setPassword('');
                        setEmail('');
                        setLogin(true);
                    }
                }).catch((err) => {
                    handleMessage(err.response.data.error)
                })
                break;
        }
    };

    return (<Container className='invoice-homepage' fluid>

        <NavBar
            handleNavigation={handleNavigation}
        />

        <div className="authPage">

            <ReturnBtn handleNavigation={handleNavigation} />

            {state.message &&
                <Row className="justify-content-center my-1">
                    <Col lg={3} md={4} sm={5} xs={6} className="message-col">
                        {state.message}
                    </Col>
                </Row>}

            <Container className="information_section my-5">

                <Row className="justify-content-center my-2">
                    <Col lg={6} md={8} sm={10} xs={10} className="bg-white p-3 text-center">
                        <h4>Sign in or register to securely store your invoices for easy access anytime, anywhere, whenever you need them</h4>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-2 auth_form">
                    <Col lg={6} md={8} sm={10} xs={10} className="bg-white p-3">
                        <div className="login-form">
                            <input
                                className="w-100"
                                value={email}
                                type="email"
                                placeholder="Email"
                                onInput={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="login-form">
                            <input
                                className="w-100"
                                value={password}
                                type="password"
                                placeholder="Password"
                                onInput={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="text-center my-1">
                            <button
                                onClick={isLogin ? () => handleAuthentication('signin') : () => handleAuthentication('signup')}
                                className={isLogin ? "login-button" : "signup-button"}
                            >
                                {isLogin ? "Sign In" : 'Sign Up'}
                            </button>
                        </div>

                    </Col>
                </Row>

                <Row className="justify-content-center my-2">
                    <Col className="accessApp" lg={6} md={8} sm={10} xs={10}>
                        {isLogin ? (
                            <p className="signup-link m-0">
                                Dont have an account?  <button onClick={() => setLogin(false)}>Sign Up</button>
                            </p>
                        ) :
                            <p className="signup-link m-0">
                                Existing user?  <button onClick={() => setLogin(true)}>Sign In</button>
                            </p>}
                    </Col>
                </Row>

            </Container>
        </div>
        <FooterPage />
    </Container >
    )
}
export default RegisterPage