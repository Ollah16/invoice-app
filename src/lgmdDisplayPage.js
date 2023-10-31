import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomDataPage from "./lgmdcustomPage";
import TermAndCondPage from "./lgmdTermsCondition";
import InvoiceData from "./lgmdInvoiceDataPage";
import DownloadBtnPage from "./lgmdDownloadPage";

const LgMdDisplay = ({
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
    handleNavigation }) => {

    const { billToTitle, poNumber, whoIsFrom, address, addressTitle, dueDateTitle, poTitle, paymentTitle, dateTitle, billTo, invoiceNum, date, dueDate, paymentTerms, logo } = state
    return (<Row className='justify-content-between'>
        <Col lg={8} md={8} className="inner-content-col">
            <Col lg={12} md={12} className='d-flex justify-content-between align-items-center'>
                <Col lg={6} md={6} className='file-input-col'>
                    {logo ?
                        < img className='logo' src={URL.createObjectURL(logo)} name='logo' alt="logo" />
                        :
                        <div>
                            <label htmlFor='logo'>+ Add You Logo</label>
                            <input
                                id='logo'
                                type='file'
                                onInput={handleLogo}
                                className='text-center d-none'
                                placeholder="+ Add You Logo"
                                aria-describedby="basic-addon1"
                            />
                        </div>}
                </Col>

                <Col lg={4} md={4}>
                    <div>
                        <h1>INVOICE</h1>
                    </div>
                    <div className='invoice-no-div'>
                        <label htmlFor='1'>#</label>
                        <input
                            id='1'
                            value={invoiceNum}
                            onInput={(event) => handleCustomInputs('invoiceno', event.target.value)}
                            className='text-end'
                            placeholder="1"
                        />
                    </div>
                </Col>
            </Col>

            <Col lg={12} md={12} className='d-flex justify-content-between align-items-center'>
                <Col lg={7} md={7}>
                    <Col lg={9} md={9} className="custom-input-col">
                        <div className="norm-Input-div">
                            <input
                                onInput={(event) => handleCustomInputs('whoisfrom', event.target.value)}
                                value={whoIsFrom}
                                placeholder="Who is the invoice from? (required)" />
                        </div>
                    </Col>

                    <Row className='justify-content-around'>
                        <Col lg={6} md={6} className="custom-input-col">
                            <div className="custom-input-div">
                                <input value={billToTitle} onInput={(event) => handleCustomInputs('bill_title', event.target.value)} />
                            </div>
                            <div className="norm-Input-div">
                                <input
                                    onInput={(event) => handleCustomInputs('bill', event.target.value)}
                                    value={billTo}
                                    type="text"
                                    placeholder="Who is the invoice to?(required)"
                                />
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="custom-input-col">
                            <div className="custom-input-div">
                                <input value={addressTitle} onInput={(event) => handleCustomInputs('address_title', event.target.value)} />
                            </div>
                            <div className="norm-Input-div">
                                <input
                                    onInput={(event) => handleCustomInputs('address', event.target.value)}
                                    type="text"
                                    value={address}
                                    placeholder="(optional)"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg={4} md={4}>
                    <Col className='invoice-data'>
                        <div className="custom-input-div">
                            <input className='text-end' value={dateTitle} onInput={(event) => handleCustomInputs('date_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={date}
                                onInput={(event) => handleCustomInputs('date', event.target.value)}
                                type='date' />
                        </div>
                    </Col>

                    <Col className='invoice-data'>
                        <div className="custom-input-div">
                            <input className='text-end' value={paymentTitle} onInput={(event) => handleCustomInputs('payment_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={paymentTerms}
                                onInput={(event) => handleCustomInputs('paymentterms', event.target.value)}
                                type='text' />
                        </div>
                    </Col>

                    <Col className='invoice-data'>
                        <div className="custom-input-div">
                            <input className='text-end' value={dueDateTitle} onInput={(event) => handleCustomInputs('duedate_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={dueDate}
                                onInput={(event) => handleCustomInputs('duedate', event.target.value)}
                                type='date'
                                placeholder="Recipient's username" />
                        </div>
                    </Col>

                    <Col className='invoice-data'>
                        <div className="custom-input-div">
                            <input className='text-end' value={poTitle} onInput={(event) => handleCustomInputs('po_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={poNumber}
                                onInput={(event) => handleCustomInputs('ponumber', event.target.value)}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </div>
                    </Col>
                </Col>
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
        <Col lg={3} md={3}>
            <DownloadBtnPage
                state={state}
                handleDownload={handleDownload}
                handleCustomInputs={handleCustomInputs}
                handleNavigation={handleNavigation} />
        </Col>
    </Row >)
}
export default LgMdDisplay