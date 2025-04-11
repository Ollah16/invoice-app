import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import FooterPage from './footer';
import InvoicePage from './components/desktop/InvoicePage'
import ModalPage from './modal';
import { useAppContext } from './context/AppContext';
import NavBar from './components/NavBar';


const HomePage = (
    {
        proceedDownload,
        handleNavigation,
    }
) => {

    let [innerWid, setWidth] = useState(window.innerWidth)

    const { isDownload, handleDownloadFunc } = useAppContext()

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


            <NavBar />

            <InvoicePage />


            <Col className='d-none d-md-block mt-5 largeScreenDisplay'>
            </Col>


            <FooterPage />

        </Container >
    )
}
export default HomePage;