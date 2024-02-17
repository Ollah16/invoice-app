import React from "react";
import { Col } from "react-bootstrap";
const InvoiceEntry = ({ state,
    handleCustomInputs }) => {

    return (
        <Col lg={4} md={4} className="invoiceEntry">
            <div>
                <h1>INVOICE</h1>
            </div>
            <div className='invoice-no-div'>
                <label htmlFor='1'>#</label>
                <input
                    id='1'
                    value={state.invoiceNum}
                    onInput={(event) => handleCustomInputs('invoiceno', event.target.value)}
                    className='text-end'
                    placeholder="1"
                />
            </div>
        </Col>
    )
}

export default InvoiceEntry