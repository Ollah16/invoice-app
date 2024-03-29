import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import SmXsDisplay from './smxsDisplay';
import LgMdDisplay from './lgmdDisplayPage';
import FooterPage from './footer';
import NavBar from './navBar';
import { useControl } from './useControl/useControl';
import ModalPage from './modal';


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
        handleClearState,
        handleNavigation,
        handleSignOut,
        handleLogo,
        handleMessage,
        handleCloseMessage,
        toggleAuth,
        removeLogo
    }
) => {

    let [innerWid, setWidth] = useState(window.innerWidth)
    const [isNavToggle, handleToggle] = useControl()

    const [isDownload, handleDownloadFunc] = useState(false)

    useEffect(() => {
        const custom_input_col = document.querySelectorAll('.smadjust');
        const invoiceEntry = document.querySelector('.invoiceEntry');
        const footer_container = document.querySelector('.footer-container');
        const downloadBtnWrapper = document.querySelector('.downloadBtnWrapper button').innerHTML.slice(0, -7);
        const file_input_col = document.querySelector('.file-input-col')

        if (innerWid < 768) {
            let checkFixedDiv = document.querySelector('.fixedDiv')
            if (checkFixedDiv) return
            invoiceEntry.classList.add('smScreen');

            const fixedDiv = document.createElement('div');
            fixedDiv.className = 'fixedDiv';
            file_input_col.classList.add('smScEf')

            const recordBtn = document.createElement('button');
            recordBtn.innerHTML = `History`;
            recordBtn.addEventListener('click', () => {
                handleNavigation('/records');
            });

            const downloadBtn = document.createElement('button');
            downloadBtn.innerHTML = `${downloadBtnWrapper}`;
            downloadBtn.addEventListener('click', () => {
                handleDownloadFunc(!isDownload)
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
    }, [innerWid, proceedDownload, handleDownloadFunc]);

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

    useEffect(() => {
        const bodyEf = document.querySelector('body')
        const largeScreenDisplay = document.querySelector('.largeScreenDisplay')

        const funcDownload = () => {
            if (isDownload) {
                bodyEf.classList.add('dEffect')
                largeScreenDisplay.classList.add('pointerNone')
            }
            else {
                bodyEf.classList.remove('dEffect')
                largeScreenDisplay.classList.remove('pointerNone')
            }
        }

        funcDownload()
    }, [isDownload])

    const handleScaling = () => {

        const modal_wrapper = document.querySelector('.modal_wrapper')
        modal_wrapper.classList.add('scaleEffect')
    }


    return (
        <Container fluid className='p-0 m-0'>
            <ModalPage
                handleScaling={handleScaling}
                handleDownloadFunc={handleDownloadFunc}
                isDownload={isDownload}
                handleNavigation={handleNavigation} />

            <Container className='invoice-homepage' fluid>

                <NavBar
                    toggleAuth={toggleAuth}
                    isNavToggle={isNavToggle}
                    handleToggle={handleToggle}
                    handleNavigation={handleNavigation}
                />



                <Col className='d-block d-md-none smallScreenDisplay'>
                    <SmXsDisplay
                        state={state}
                        removeLogo={removeLogo}
                        isDownload={isDownload}
                        proceedDownload={proceedDownload}
                        handleDataInp={handleDataInp}
                        handleCustomInputs={handleCustomInputs}
                        handleAddRow={handleAddRow}
                        handleDeleteRow={handleDeleteRow}
                        handleInputValue={handleInputValue}
                        handleInputsBtn={handleInputsBtn}
                        handleAuth={handleAuth}
                        handleClearState={handleClearState}
                        handleNavigation={handleNavigation}
                        handleSignOut={handleSignOut}
                        handleLogo={handleLogo}
                        handleMessage={handleMessage}
                        handleCloseMessage={handleCloseMessage}
                    />
                </Col>

                <Col className='d-none d-md-block mt-5 largeScreenDisplay'>
                    {/* <div class="border-effect"></div> */}

                    <LgMdDisplay
                        state={state}
                        removeLogo={removeLogo}
                        isDownload={isDownload}
                        handleDownloadFunc={handleDownloadFunc}
                        proceedDownload={proceedDownload}
                        handleDataInp={handleDataInp}
                        handleCustomInputs={handleCustomInputs}
                        handleAddRow={handleAddRow}
                        handleDeleteRow={handleDeleteRow}
                        handleInputValue={handleInputValue}
                        handleInputsBtn={handleInputsBtn}
                        handleAuth={handleAuth}
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
        </Container>
    )
}
export default HomePage;