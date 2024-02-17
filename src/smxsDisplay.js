import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import InvoiceData from "./smxsInvoiceDataPage"
import CustomDataPage from "./customInputPage"
import DateTermsPage from "./datePage"
import TermAndCondPage from "./term&Condtions"
import InvInfo from "./invoiceInformation"
import DownloadBtnPage from "./downloadSection"
import InvoiceEntry from "./invoiceEntry"
import ImageComp from "./imageComp"

const SmXsDisplay = ({
    state,
    handleInputValue,
    handleDataInp,
    handleInputButtons,
    handleAddRow,
    handleDeleteRow,
    handleDownload,
    handleCustomInputs,
    handleInputsBtn,
    handleLogo,
    isDownloadButtonDisabled,
    handleNavigation,
    proceedDownload
}) => {


    let { termsTitle,
        whoIsFrom,
        logo,
        address,
        noteTitle,
        billToTitle,
        addressTitle,
        invoiceNum,
        dueDateTitle,
        poTitle,
        paymentTitle,
        dateTitle,
        billTo,
        poNumber,
        terms,
        date,
        dueDate,
        paymentTerms,
        note } = state



    return (<Row>
        <Row className="d-flex justify-content-center p-0 mt-5 mx-0 mb-0 me-0">
            <Col className='xssm-display'>
                <InvoiceEntry
                    state={state}
                    handleCustomInputs={handleCustomInputs}
                />

                <Col sm={12} xs={12}>
                    <ImageComp
                        handleLogo={handleLogo}
                        state={state} />
                </Col>

                <InvInfo
                    state={state}
                    handleCustomInputs={handleCustomInputs}
                />

                <DateTermsPage
                    state={state}
                    handleCustomInputs={handleCustomInputs}
                />

                <InvoiceData
                    handleDataInp={handleDataInp}
                    state={state}
                    handleAddRow={handleAddRow}
                    handleDeleteRow={handleDeleteRow}
                />

                <TermAndCondPage
                    state={state}
                    handleCustomInputs={handleCustomInputs} />

                <CustomDataPage
                    handleInputsBtn={handleInputsBtn}
                    handleCustomInputs={handleCustomInputs}
                    handleDataInp={handleDataInp}
                    handleInputValue={handleInputValue}
                    handleInputButtons={handleInputButtons}
                    state={state} />

            </Col >
        </Row >
        <DownloadBtnPage handleCustomInputs={handleCustomInputs}
            handleDownload={handleDownload}
            state={state}
            proceedDownload={proceedDownload}
            handleNavigation={handleNavigation} />
    </Row >)
}
export default SmXsDisplay