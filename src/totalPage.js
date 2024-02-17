import React from 'react'
import { Col } from 'react-bootstrap'

const TotalAllPage = ({
    state,
    handleCustomInputs,
    handleInputs
}) => {

    let { balanceDueTitle, totalTitle, amountPaidTitle, total, balance, amountPaid, currency } = state

    return (<>
        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <input value={totalTitle} onInput={(event) => handleCustomInputs('total_title', event.target.value)} className='text-end' placeholder='Total' />
            </div>
            <div className='customInputbutton text-end'>
                {`${currency.toString().substring(0, 3)}${total}.00`}
            </div>
        </Col>

        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <input value={amountPaidTitle} onInput={(event) => handleCustomInputs('amountpaid_title', event.target.value)} className='text-end' placeholder='Amount Paid' />
            </div>
            <div className='customInputbutton'>
                <input
                    className='customAmount text-end'
                    value={amountPaid}
                    onInput={(event) => handleInputs('amountpaid', event.target.value)}
                />
            </div>
        </Col>

        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <input value={balanceDueTitle} onInput={(event) => handleCustomInputs('balancedue_title', event.target.value)} className='text-end' placeholder='Balance Due' />
            </div>
            <div className='customInputbutton text-end'>
                <span className='d-flex justify-content-end'>{`${currency.toString().substring(0, 3)}${balance}.00`}</span>
            </div>
        </Col >
    </>
    )
}
export default TotalAllPage