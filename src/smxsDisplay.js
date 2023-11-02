import React from "react"
import { Col, Row } from "react-bootstrap"
import InvoiceData from "./smxsInvoiceDataPage"
import CustomDataPage from "./smxscustomPage"
import DownloadPage from "./smxsDownloadPage"

const SmXsDisplay = ({
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
    isDownloadButtonDisabled,
    handleNavigation,
    proceedDownload
}) => {


    let { termsTitle, whoIsFrom, logo, address, noteTitle, billToTitle, addressTitle, invoiceNum, dueDateTitle, poTitle, paymentTitle, dateTitle, billTo, poNumber, terms, date, dueDate, paymentTerms, note } = state
    return (<Row className="m-1">
        <Row className="d-flex justify-content-center ">
            <Col className='xssm-display'>
                <Col sm={12} xs={12}>
                    <h1 className='text-start'>INVOICE</h1>
                </Col>

                <Col sm={12} xs={12} className='invoice-no-col'>
                    <label htmlFor='1'>#</label>
                    <input
                        id='1'
                        value={invoiceNum}
                        onInput={(event) => handleCustomInputs('invoiceno', event.target.value)}
                        className='text-end'
                        placeholder="1"
                    />
                </Col>

                <Col sm={12} xs={12}>
                    <Col sm={4} xs={4} className='file-input-col-sm'>
                        <div>
                            <label htmlFor='logo'>{!logo ? '+ Add You Logo' : logo.name}</label>
                            <input
                                id='logo'
                                type='file'
                                onInput={handleLogo}
                                className='text-center d-none'
                                placeholder="+ Add You Logo"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </Col>
                </Col>

                <Col sm={12} xs={12} className="custom-input-col">
                    <div className="norm-Input-div">
                        <input
                            onInput={(event) => handleCustomInputs('whoisfrom', event.target.value)}
                            value={whoIsFrom}
                            placeholder="Who is the invoice from? (required)"
                        />
                    </div>
                </Col>
                <Row className="justify-content-center">
                    <Col sm={11} xs={11} className="custom-input-col">
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

                    <Col sm={11} xs={11} className="custom-input-col">
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
                <Row className=" justify-content-end">
                    <Col sm={10} xs={10} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={dateTitle} onInput={(event) => handleCustomInputs('date_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={date}
                                onInput={(event) => handleCustomInputs('date', event.target.value)}
                                type='date' />
                        </div>
                    </Col>

                    <Col sm={10} xs={10} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={paymentTitle} onInput={(event) => handleCustomInputs('payment_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={paymentTerms}
                                onInput={(event) => handleCustomInputs('paymentterms', event.target.value)}
                                type='text' />
                        </div>
                    </Col>

                    <Col sm={10} xs={10} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={dueDateTitle} onInput={(event) => handleCustomInputs('duedate_title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={dueDate}
                                onInput={(event) => handleCustomInputs('duedate', event.target.value)}
                                type='date'
                                placeholder="Recipient's username" />
                        </div>
                    </Col>

                    <Col sm={10} xs={10} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={poTitle} onInput={(event) => handleCustomInputs('po_title', event.target.value)} />
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
                </Row>
                <InvoiceData handleDataInp={handleDataInp} state={state} handleAddRow={handleAddRow} handleDeleteRow={handleDeleteRow} />

                <Col sm={12} xs={12} className='notesTerms-col'>
                    <div className='customInput'>
                        <input value={noteTitle} onInput={(event) => handleCustomInputs('note_title', event.target.value)} />
                    </div>
                    <div className='normInput'>
                        <input
                            id='notes'
                            value={note}
                            onInput={(event) => handleCustomInputs('note', event.target.value)}
                            type="text"
                            placeholder="Notes- relevant information" />
                    </div>

                    <div className='customInput'>
                        <input value={termsTitle} onInput={(event) => handleCustomInputs('terms_title', event.target.value)} />
                    </div>
                    <div className='normInput'>
                        <input
                            id='terms'
                            value={terms}
                            onInput={(event) => handleCustomInputs('terms', event.target.value)}
                            placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
                    </div>
                </Col>

                <CustomDataPage handleInputsBtn={handleInputsBtn} handleCustomInputs={handleCustomInputs}
                    handleDataInp={handleDataInp} handleInputs={handleInputs} handleInputButtons={handleInputButtons} state={state} />
            </Col >
        </Row >
        <DownloadPage handleCustomInputs={handleCustomInputs}
            handleDownload={handleDownload}
            state={state}
            proceedDownload={proceedDownload}
            handleNavigation={handleNavigation} />
    </Row >)
}
export default SmXsDisplay