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
                <input value={dateTitle} onInput={(event) => handleCustomInputs('date_title', event.target.value)} />
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
                <input value={paymentTitle} onInput={(event) => handleCustomInputs('payment_title', event.target.value)} />
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

        <Col className='invoice-data'>
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
    </Col>)
}

export default DateTermsPage
