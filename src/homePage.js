import React, { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import SmXsDisplay from './smxsDisplay';
import LgMdDisplay from './lgmdDisplayPage';
import FooterPage from './footer';
import { GiHamburgerMenu } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";


const HomePage = (
    {
        state,
        proceedDownload,
        handleDataInp,
        handleCustomInputs,
        handleAddRow,
        handleDeleteRow,
        handleInputValue,
        handleInputsBtn,
        handleAuth,
        handleDownload,
        handleClearState,
        handleNavigation,
        handleSignOut,
        handleLogo,
        handleMessage,
        handleCloseMessage,
        toggleAuth
    }
) => {

    let [innerWid, setWidth] = useState(window.innerWidth)
    let [isNavToggle, setToggle] = useState(false)

    useEffect(() => {
        const custom_input_col = document.querySelectorAll('.smadjust');
        const invoiceEntry = document.querySelector('.invoiceEntry');
        const footer_container = document.querySelector('.footer-container');
        const downloadBtnWrapper = document.querySelector('.downloadBtnWrapper button').innerHTML.slice(0, -7);
        const file_input_col = document.querySelector('.file-input-col label')

        if (innerWid < 768) {
            let checkFixedDiv = document.querySelector('.fixedDiv')
            if (checkFixedDiv) return
            invoiceEntry.classList.add('smScreen');

            const fixedDiv = document.createElement('div');
            fixedDiv.className = 'fixedDiv';
            file_input_col.classList.add('imageInputSmall')

            const recordBtn = document.createElement('button');
            recordBtn.innerHTML = `History`;
            recordBtn.addEventListener('click', () => {
                handleNavigation('/records');
            });

            const downloadBtn = document.createElement('button');
            downloadBtn.innerHTML = `${downloadBtnWrapper}`;
            downloadBtn.addEventListener('click', () => {
                handleDownload({ userSalesId: null, page: 'homepage' });
            });

            downloadBtn.style.opacity = proceedDownload ? '1' : '0.5';
            downloadBtn.disabled = !proceedDownload;

            fixedDiv.appendChild(recordBtn);
            fixedDiv.appendChild(downloadBtn);
            footer_container.before(fixedDiv);

            custom_input_col.forEach((norm) => {
                norm.classList.add('smEffect');
            });
        } else {
            invoiceEntry.classList.remove('smScreen');

            const fixedDiv = document.querySelector('.fixedDiv');
            if (fixedDiv) {
                fixedDiv.remove();
            }

            custom_input_col.forEach((norm) => {
                norm.classList.remove('smEffect');
            });
        }
    }, [innerWid, proceedDownload, handleNavigation, handleDownload]);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', () => {
            handleResize()
        })

        return () => {
            window.removeEventListener('resize', () => {
                handleResize()

            })
        }
    }, [])

    return (<Container className='invoice-homepage' fluid>
        {/* <div className="moving-background" >
            <LuBadgeDollarSign size={40} />
        </div> */}

        <Navbar>
            <Container className='navBar_container'>
                <Col className='navBrandCol'>
                    <Navbar.Brand href="#home" className='text-white'>Invoice System</Navbar.Brand>
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
                    <span className={`${isNavToggle ? 'active' : ''}`} onClick={() => setToggle(!isNavToggle)}><GiHamburgerMenu /></span>
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

        <Col className='d-block d-md-none smallScreenDisplay'>
            <SmXsDisplay
                state={state}
                proceedDownload={proceedDownload}
                handleDataInp={handleDataInp}
                handleCustomInputs={handleCustomInputs}
                handleAddRow={handleAddRow}
                handleDeleteRow={handleDeleteRow}
                handleInputValue={handleInputValue}
                handleInputsBtn={handleInputsBtn}
                handleAuth={handleAuth}
                handleDownload={handleDownload}
                handleClearState={handleClearState}
                handleNavigation={handleNavigation}
                handleSignOut={handleSignOut}
                handleLogo={handleLogo}
                handleMessage={handleMessage}
                handleCloseMessage={handleCloseMessage}
            />
        </Col>

        <Col className='d-none d-md-block mt-5 largeScreenDisplay'>
            <LgMdDisplay
                state={state}
                proceedDownload={proceedDownload}
                handleDataInp={handleDataInp}
                handleCustomInputs={handleCustomInputs}
                handleAddRow={handleAddRow}
                handleDeleteRow={handleDeleteRow}
                handleInputValue={handleInputValue}
                handleInputsBtn={handleInputsBtn}
                handleAuth={handleAuth}
                handleDownload={handleDownload}
                handleClearState={handleClearState}
                handleNavigation={handleNavigation}
                handleSignOut={handleSignOut}
                handleLogo={handleLogo}
                handleMessage={handleMessage}
                handleCloseMessage={handleCloseMessage}
            />
        </Col>


        <FooterPage />

    </Container >
    )
}
export default HomePage;