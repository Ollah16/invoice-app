import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';
import { useParams } from 'react-router-dom'
import html2pdf from 'html2pdf.js'
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import { MdOutlineArrowBack } from 'react-icons/md'
import StateDownloadPage from './stateDownloadPage';
import ServerDownloadPage from './serverDownloadPage';

const DownloadPage = ({
    state,
    handleClearState,
    handleNavigation
}) => {

    const downloadCurrentPage = useRef()
    const { userSalesId, page } = useParams()
    let [userInvoice, setUserInvoice] = useState('')
    let [userData, setUserData] = useState('')
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        switch (true) {
            case page === 'homepage' && state.isLogged:
                handleSaveDownload();
                break;
            case page === 'records':
                handleGetInvoice();
                break;
            case page === 'homepage' && !state.isLogged:
                handleDownloadPage();
                break;
        }
    }, [])

    useEffect(() => {
        if (!userData.length && !userData.length) return
        console.log(userData)
        handleDownloadPage()

    }, [userInvoice, userData])

    const handleDownloadPage = () => {
        const pageId = downloadCurrentPage.current
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(pageId).save();
        handleReturn()
    }

    const handleReturn = () => {
        switch (true) {
            case page === 'records':
                handleNavigation('/records');
                break;
            case page === 'homepage':
                handleNavigation('/')
                handleClearState();
                break;
        }
    }

    const handleGetInvoice = () => {
        // axios.get(`http://localhost:9080/invoice/getinvoice/${userSalesId}`, {
        axios.get(`https://invoice-back-end.vercel.app/invoice/getinvoice/${userSalesId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        }).then((response) => {
            const { userInvoice, userData } = response.data
            setUserInvoice(userInvoice)
            setUserData(userData)
        }).catch((err) => { console.error(err) })
    }

    const handleSaveDownload = () => {
        const formData = new FormData();

        for (const key in state) {
            const value = state[key];
            if (key === 'data') {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, value);
            }
        }
        // axios.post('http://localhost:9080/invoice/saveinvoice', formData, {
        axios.post('https://invoice-back-end.vercel.app/invoice/saveinvoice', formData, {
            headers: {
                'Content-Type': 'multipart/formdata',
                'Authorization': `Bearer ${accessToken}`
            }
        }).catch((err) => { console.error(err) })
        handleDownloadPage()
    }

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
                <button onClick={() => handleReturn()}> <MdOutlineArrowBack /><span>{page === 'records' ? 'Records' : 'Home'}</span></button>
            </Col>
        </Row>

        {console.log(userInvoice)}

        {page === 'records' && userInvoice.length &&
            userInvoice.map((invoice, index) =>
            (<ServerDownloadPage
                downloadCurrentPage={downloadCurrentPage}
                invoice={invoice}
                key={index}
                index={index}
                userData={userData} />))
        }
        {page === 'homepage' &&
            <StateDownloadPage state={state} downloadCurrentPage={downloadCurrentPage} />
        }

        < footer className='footer-container' >
            < Row className="invoice-footer" >
                <Col lg={12} className="text-center">
                    <p>&copy; {new Date().getFullYear()} Invoice Generator. All Rights Reserved.</p>
                </Col>
            </Row >
        </footer >
    </Container >);
}
export default DownloadPage;