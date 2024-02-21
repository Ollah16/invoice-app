import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import html2pdf from 'html2pdf.js'
import StateDownloadPage from './stateDownloadPage';

const DownloadPage = ({
    state,
    handleNavigation }) => {

    const downloadCurrentPage = useRef()

    useEffect(() => {

        handleDownloadPage()
    }, [])

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
        handleNavigation('/thanks')
    }

    return (

        <StateDownloadPage state={state} downloadCurrentPage={downloadCurrentPage} />

    );
}
export default DownloadPage;