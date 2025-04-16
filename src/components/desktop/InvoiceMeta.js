import React from "react";
import { Col } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import InputField from "../common/InputField";

const InvoiceMeta = () => {

    const { state: { dFault, invoiceNum, }, handleCustomInputs } = useAppContext();

    return (
        <Col lg={4} md={4} className="invoiceEntry">
            <div>
                <InputField
                    value={dFault}
                    aria-label="Invoice Number Title"
                    onChange={(value) => handleCustomInputs('ALTER_DEFAULT', value)}
                />

            </div>
            <div className='invoice-no-div'>
                <label htmlFor='Invoice Number'>#</label>
                <InputField
                    id='Invoice Number'
                    value={invoiceNum}
                    aria-label="Invoice Number"
                    onChange={(value) => handleCustomInputs('INVOICE_NUMBER', value)}
                    className='text-end'
                    placeholder="1"
                />
            </div>
        </Col>
    )
}

export default InvoiceMeta