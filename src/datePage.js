import React from "react";
import { Col } from "react-bootstrap";
const DateTermsPage = ({
    state,
    handleCustomInputs,
}) => {

    const { dateTitle, date, paymentTerms, paymentTitle, dueDate, dueDateTitle, poNumber, poTitle } = state

    return (<Col >
        <Col className='invoice-data'>
            <div className="custom-input-div">
                <input value={dateTitle} onInput={(event) => handleCustomInputs('DATE_TITLE', event.target.value)} />
            </div>
            <div className="norm-input-div">
                <input
                    value={date}
                    onInput={(event) => handleCustomInputs('DATE', event.target.value)}
                    type='date' />
            </div>
        </Col>

        <Col className='invoice-data'>
            <div className="custom-input-div">
                <input value={paymentTitle} onInput={(event) => handleCustomInputs('PAYMENT_TITLE', event.target.value)} />
            </div>
            <div className="norm-input-div">
                <input
                    value={paymentTerms}
                    onInput={(event) => handleCustomInputs('PAYMENT_TERMS', event.target.value)}
                    type='text' />
            </div>
        </Col>

        <Col className='invoice-data'>
            <div className="custom-input-div">
                <input value={dueDateTitle} onInput={(event) => handleCustomInputs('DUE_DATE_TITLE', event.target.value)} />
            </div>
            <div className="norm-input-div">
                <input
                    value={dueDate}
                    onInput={(event) => handleCustomInputs('DUE_DATE', event.target.value)}
                    type='date'
                    placeholder="Recipient's username" />
            </div>
        </Col>

        <Col className='invoice-data'>
            <div className="custom-input-div">
                <input value={poTitle} onInput={(event) => handleCustomInputs('PO_TITLE', event.target.value)} />
            </div>
            <div className="norm-input-div">
                <input
                    value={poNumber}
                    onInput={(event) => handleCustomInputs('PO_NUMBER', event.target.value)}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </div>
        </Col>
    </Col>)
}

export default DateTermsPage
