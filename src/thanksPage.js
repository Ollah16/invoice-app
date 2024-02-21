import React, { useEffect, useRef } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import NavBar from "./navBar";
import { useControl } from "./useControl/useControl";
import { MdOutlineArrowBack } from 'react-icons/md'
import FooterPage from "./footer";
import html2pdf from "html2pdf.js";
import StateDownloadPage from "./stateDownloadPage";

const ThanksPage = ({
    state,
    toggleAuth,
    handleNavigation
}) => {

    const [isNavToggle, handleToggle] = useControl()
    const downloadCurrentPage = useRef(null)

    useEffect(() => {

        // handleDownloadPage()
        const bodyEf = document.querySelector('body')
        bodyEf.classList.remove('dEffect')

    }, [])

    // const handleDownloadPage = () => {
    //     const pageId = downloadCurrentPage.current
    //     var opt = {
    //         margin: 1,
    //         filename: 'invoice.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    //     };
    //     html2pdf().set(opt).from(pageId).save();
    // }


    return (<Container fluid className="invoice-homepage">
        <NavBar
            toggleAuth={toggleAuth}
            isNavToggle={isNavToggle}
            handleToggle={handleToggle}
            handleNavigation={handleNavigation}
        />
        {/* <StateDownloadPage
            state={state}
            downloadCurrentPage={downloadCurrentPage} /> */}

        <div className="appr-section">
            <Container className="appr">
                <div>
                    <h2>
                        Thank you for invoicing with us!
                    </h2>

                    <p>
                        Your invoice has been generated! If the invoice did not open automatically then you can find it in your <b>Downloads</b>  folder.
                    </p>

                    {/* <p>
                    <span>  <PiWarningCircleLight /> </span> A copy has also been saved to your device. You can return to the <b>History</b> page any time to make changes to your invoice. It is strongly recommended that you retain a copy of the generated PDF for your records.
                </p> */}
                </div>
                <div>
                    <h2>
                        What's next?
                    </h2>
                    <div>
                        <button onClick={() => handleNavigation('/')}><span><MdOutlineArrowBack /></span><span>Edit Invoice</span></button>
                        <button onClick={() => handleNavigation('/:clearState')}>New Invoice</button></div>
                </div>

            </Container>
        </div>

        <FooterPage />

    </Container >)
}

export default ThanksPage