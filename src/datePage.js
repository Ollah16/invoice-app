import React from "react";
import { Col } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";
import InputField from "./components/common/InputField";

const DateTermsPage = () => {

    const { state: { dateTitle, date, paymentTerms, paymentTitle, dueDate, dueDateTitle, poNumber, poTitle }, handleCustomInputs } = useAppContext();

    return (<Col >
        <Col className='invoice-data'>
            <div className="custom-input-div">
                <InputField value={dateTitle} onChange={(event) => handleCustomInputs('DATE_TITLE', event.target.value)} />
            </div>

            <div className="norm-input-div">
                <InputField
                    value={date}
                    onChange={(event) => handleCustomInputs('DATE', event.target.value)}
                    type='date' />
            </div>
        </Col>

        <Col className='invoice-data'>
            <div className="custom-input-div">
                <InputField value={paymentTitle} onChange={(event) => handleCustomInputs('PAYMENT_TITLE', event.target.value)} />
            </div>
            <div className="norm-input-div">
                <InputField
                    value={paymentTerms}
                    onChange={(event) => handleCustomInputs('PAYMENT_TERMS', event.target.value)}
                    type='text' />
            </div>
        </Col>

        <Col className='invoice-data'>
            <div className="custom-input-div">
                <InputField value={dueDateTitle} onChange={(event) => handleCustomInputs('DUE_DATE_TITLE', event.target.value)} />
            </div>
            <div className="norm-input-div">
                <InputField
                    value={dueDate}
                    onChange={(event) => handleCustomInputs('DUE_DATE', event.target.value)}
                    type='date'
                    placeholder="Recipient's username" />
            </div>
        </Col>

        <Col className='invoice-data'>

            <div className="custom-input-div">
                <InputField value={poTitle} onChange={(event) => handleCustomInputs('PO_TITLE', event.target.value)} />
            </div>

            <div className="norm-input-div">
                <InputField
                    value={poNumber}
                    onChange={(event) => handleCustomInputs('PO_NUMBER', event.target.value)}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </div>
        </Col>
    </Col>)
}

export default DateTermsPage
