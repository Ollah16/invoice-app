import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomDataPage from "./customInputPage";
import TermAndCondPage from "./term&Condtions";
import InvoiceData from "./lgmdInvoiceDataPage";
import DownloadBtnPage from "./downloadSection";
import DateTermsPage from "./datePage";
import InvInfo from "./invoiceInformation";
import InvoiceEntry from "./invoiceEntry";
import ImageComp from "./imageComp";

const LgMdDisplay = (
    {
        state,
        handleInputs,
        handleDataInp,
        handleInputButtons,
        handleAddRow,
        handleDeleteRow,
        handleDownload,
        handleCustomInputs,
        handleInputsBtn,
        handleLogo,
        handleNavigation,
        proceedDownload }) => {


    const {
        billToTitle,
        poNumber,
        whoIsFrom,
        address,
        addressTitle,
        dueDateTitle,
        poTitle,
        paymentTitle,
        dateTitle,
        billTo,
        invoiceNum,
        date,
        dueDate,
        paymentTerms,
        logo } = state
    let [innerWid, setWidth] = useState(window.innerWidth)

    return (<Row className='justify-content-between largeScreen'>

        <Col lg={10} md={12} className="inner-content-col">
            <Col lg={12} md={12} className='d-flex justify-content-between align-items-center'>

                <ImageComp
                    handleLogo={handleLogo}
                    state={state} />

                <InvoiceEntry
                    state={state}
                    handleCustomInputs={handleCustomInputs}
                />

            </Col>

            <Col lg={12} md={12} className='d-flex justify-content-between gapInclude'>
                <InvInfo
                    state={state}
                    handleCustomInputs={handleCustomInputs}
                />

                <DateTermsPage
                    state={state}
                    handleCustomInputs={handleCustomInputs}
                />
            </Col>

            <InvoiceData
                handleDataInp={handleDataInp}
                state={state}
                handleAddRow={handleAddRow}
                handleDeleteRow={handleDeleteRow} />

            <Row className="justify-content-between">

                <TermAndCondPage
                    state={state}
                    handleCustomInputs={handleCustomInputs} />

                <CustomDataPage
                    handleInputsBtn={handleInputsBtn}
                    handleCustomInputs={handleCustomInputs}
                    handleDataInp={handleDataInp}
                    handleInputs={handleInputs}
                    handleInputButtons={handleInputButtons}
                    state={state} />
            </Row>
        </Col>

        <Col className="downloadSection">
            <DownloadBtnPage
                handleDownload={handleDownload}
                handleCustomInputs={handleCustomInputs}
                handleNavigation={handleNavigation}
                proceedDownload={proceedDownload}
            />
        </Col>
    </Row >)
}
export default LgMdDisplay