import React from 'react'
import { Col } from 'react-bootstrap'

const TotalAllPage = ({
    state,
    handleCustomInputs,
    handleInputValue
}) => {

    let { balanceDueTitle, totalTitle, amountPaidTitle, total, balance, amountPaid, currency } = state

    return (<>
        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <input value={totalTitle} onInput={(event) => handleCustomInputs('TOTAL_TITLE', event.target.value)} className='text-end' placeholder='Total' />
            </div>
            <div className='customInputbutton text-end justify-content-end'>
                {`${currency.toString().substring(0, 3)}${total}.00`}
            </div>
        </Col>

        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <input value={amountPaidTitle} onInput={(event) => handleCustomInputs('AMOUNT_PAID_TITLE', event.target.value)} className='text-end' placeholder='Amount Paid' />
            </div>
            <div className='customInputbutton'>
                <input
                    className='customAmount text-end'
                    value={amountPaid}
                    onInput={(event) => handleInputValue('AMOUNT_PAID', event.target.value)}
                />
            </div>
        </Col>

        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <input value={balanceDueTitle} onInput={(event) => handleCustomInputs('BALANCE_DUE_TITLE', event.target.value)} className='text-end' placeholder='Balance Due' />
            </div>
            <div className='customInputbutton text-end d-flex justify-content-end'>
                <span className='d-flex justify-content-end'>{`${currency.toString().substring(0, 3)}${balance}.00`}</span>
            </div>
        </Col >
    </>
    )
}
export default TotalAllPage