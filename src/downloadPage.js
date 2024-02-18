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
import ReturnBtn from './returnBtn';
import NavBar from './navBar';
import FooterPage from './footer';

const DownloadPage = ({
    state,
    handleClearState,
    handleNavigation }) => {

    const downloadCurrentPage = useRef()
    // const { userSalesId, page } = useParams()
    let [userInvoice, setUserInvoice] = useState('')
    let [userData, setUserData] = useState('')
    const accessToken = localStorage.getItem('accessToken')

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
        // switch (true) {
        //     case page === 'homepage' && state.isLogged:
        //         handleSaveDownload();
        //         break;
        //     case page === 'records':
        //         handleGetInvoice();
        //         break;
        //     case page === 'homepage' && !state.isLogged:
        //         handleDownloadPage();
        //         break;
        // }
    }, [])

    useEffect(() => {
        if (userInvoice.length === 0 && userData.length === 0) {
            return;
        }
        // handleDownloadPage();
    }, [userInvoice, userData]);


    const handleDownloadPage = () => {
        const pageId = downloadCurrentPage.current
        var opt = {
            margin: 1,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(pageId).save();
        handleReturn()
    }

    const handleReturn = () => {
        // switch (true) {
        //     case page === 'records':
        //         handleNavigation('/records');
        //         break;
        //     case page === 'homepage':
        //         handleNavigation('/')
        //         handleClearState();
        //         break;
        // }
    }

    // const handleGetInvoice = () => {
    //     // axios.get(`http://localhost:9080/invoice/getinvoice/${userSalesId}`, {
    //     axios.get(`https://invoice-back-end.vercel.app/invoice/getinvoice/${userSalesId}`, {
    //         headers: {
    //             'Authorization': `Bearer ${accessToken}`,
    //         }
    //     }).then((response) => {
    //         const { userInvoice, userData } = response.data
    //         setUserInvoice(userInvoice)
    //         setUserData(userData)
    //     }).catch((err) => { console.error(err) })
    // }

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
        <NavBar handleNavigation={handleNavigation} />
        <ReturnBtn handleNavigation={handleNavigation} />

        <StateDownloadPage state={state} downloadCurrentPage={downloadCurrentPage} />

        <FooterPage />
    </Container >);
}
export default DownloadPage;