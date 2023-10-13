import React from "react"
import { Col, Row } from "react-bootstrap"
import InvoiceData from "./smxsInvoiceDataPage"
import CustomDataPage from "./smxscustomPage"
import DownloadPage from "./smxsDownloadPage"

const SmXsDisplay = ({
    state, handleInputs, handleDataInp, handleInputButtons, handleAddRow, handleDeleteRow,
    handleDownload, handleCustomInputs, handleInputsBtn
}) => {
    return (<>
        <Row className="d-flex justify-content-center">
            <Col className='xssm-display'>
                <Col sm={12} xs={12}>
                    <h1 className='text-start'>INVOICE</h1>
                </Col>

                <Col sm={12} xs={12} className='invoice-no-col'>
                    <label htmlFor='1'>#</label>
                    <input
                        id='1'
                        value={state.invoiceNum}
                        onInput={(event) => handleCustomInputs('invoiceno', event.target.value)}
                        placeholder="1"
                    />
                </Col>

                <Col sm={12} xs={12}>
                    <Col sm={4} xs={4} className='file-input-col-sm'>
                        {/* {state.logo &&
                            <img className='logo' src={require(`./assets/imgs/${state.logo}`)} />} */}
                        {!state.logo &&
                            <div>
                                <label className='text-center' htmlFor='logo'>+ Add You Logo</label>
                                <input
                                    id='logo'
                                    type='file'
                                    onInput={(event) => handleCustomInputs('logo', event.target.value)}
                                    placeholder="+ Add You Logo"
                                    className="d-none"
                                />
                            </div>}
                    </Col>
                </Col>

                <Col sm={12} xs={12} className="custom-input-col">
                    <div className="norm-Input-div">
                        <input
                            onInput={(event) => handleCustomInputs('whoisfrom', event.target.value)}
                            value={state.reciever}
                            placeholder="Who is the invoice from? (required)"
                        />
                    </div>
                </Col>
                <Row className="justify-content-center">
                    <Col sm={11} xs={11} className="custom-input-col">
                        <div className="custom-input-div">
                            <input value={state.billTo_title} onInput={(event) => handleCustomInputs('bill-title', event.target.value)} />
                        </div>
                        <div className="norm-Input-div">
                            <input
                                onInput={(event) => handleCustomInputs('bill', event.target.value)}
                                value={state.billTo}
                                type="text"
                                placeholder="Who is the invoice to?(required)"
                            />
                        </div>
                    </Col>

                    <Col sm={11} xs={11} className="custom-input-col">
                        <div className="custom-input-div">
                            <input value={state.address_title} onInput={(event) => handleCustomInputs('address-title', event.target.value)} />
                        </div>
                        <div className="norm-Input-div">
                            <input
                                onInput={(event) => handleCustomInputs('address', event.target.value)}
                                type="text"
                                value={state.shipTo}
                                placeholder="(optional)"
                            />
                        </div>
                    </Col>
                </Row>
                <Row className=" justify-content-end">
                    <Col sm={8} xs={8} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={state.date_title} onInput={(event) => handleCustomInputs('date-title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={state.date}
                                onInput={(event) => handleCustomInputs('date', event.target.value)}
                                type='date' />
                        </div>
                    </Col>

                    <Col sm={8} xs={8} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={state.payment_title} onInput={(event) => handleCustomInputs('payment-title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={state.paymentTerms}
                                onInput={(event) => handleCustomInputs('paymentterms', event.target.value)}
                                type='text' />
                        </div>
                    </Col>

                    <Col sm={8} xs={8} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={state.due_Date_title} onInput={(event) => handleCustomInputs('duedate-title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={state.dueDate}
                                onInput={(event) => handleCustomInputs('duedate', event.target.value)}
                                type='date'
                                placeholder="Recipient's username" />
                        </div>
                    </Col>

                    <Col sm={8} xs={8} className='invoice-data'>
                        <div className="custom-input-div">
                            <input value={state.po_title} onInput={(event) => handleCustomInputs('po-title', event.target.value)} />
                        </div>
                        <div className="norm-input-div">
                            <input
                                value={state.poNumber}
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
                        <input value={state.note_title} onInput={(event) => handleCustomInputs('note-title', event.target.value)} />
                    </div>
                    <div className='normInput'>
                        <input
                            id='notes'
                            value={state.note}
                            onInput={(event) => handleCustomInputs('note', event.target.value)}
                            type="text"
                            placeholder="Notes- relevant information" />
                    </div>

                    <div className='customInput'>
                        <input value={state.terms_title} onInput={(event) => handleCustomInputs('terms-title', event.target.value)} />
                    </div>
                    <div className='normInput'>
                        <input
                            id='terms'
                            value={state.terms}
                            onInput={(event) => handleCustomInputs('terms', event.target.value)}
                            placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
                    </div>
                </Col>

                <CustomDataPage handleInputsBtn={handleInputsBtn} handleCustomInputs={handleCustomInputs}
                    handleDataInp={handleDataInp} handleInputs={handleInputs} handleInputButtons={handleInputButtons} state={state} />
            </Col >
        </Row >
        <DownloadPage handleCustomInputs={handleCustomInputs} handleDownload={handleDownload} />
    </>)
}
export default SmXsDisplay