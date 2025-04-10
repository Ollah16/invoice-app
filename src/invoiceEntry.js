import React from "react";
import { Col } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";
import InputField from "./components/common/InputField";

const InvoiceEntry = () => {

    const { state: { dFault, invoiceNum, }, handleCustomInputs } = useAppContext();

    return (
        <Col lg={4} md={4} className="invoiceEntry">
            <div>
                <InputField
                    value={dFault}
                    onChange={(value) => handleCustomInputs('ALTER_DEFAULT', value)}
                />

            </div>
            <div className='invoice-no-div'>
                <label htmlFor='1'>#</label>
                <InputField
                    id='1'
                    value={invoiceNum}
                    onChange={(value) => handleCustomInputs('INVOICE_NUMBER', value)}
                    className='text-end'
                    placeholder="1"
                />
            </div>
        </Col>
    )
}

export default InvoiceEntry