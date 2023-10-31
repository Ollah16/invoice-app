import React from "react";
import { Col } from "react-bootstrap";
const TotalPage = ({ state, handleCustomInputs, handleInputs }) => {

    let { balanceDueTitle, balance, currency, amountPaidTitle, amountPaid, totalTitle, total } = state

    return (<>
        <Col sm={12} xs={12} className="custom-col">
            <div className='customInput'>
                <input value={totalTitle} onInput={(event) => handleCustomInputs('total_title', event.target.value)} className='text-end' placeholder='Total' />
            </div>
            <div className='customInputbutton d-flex justify-content-end px-4'>
                {`${currency.toString().substring(0, 3)}${total}.00`}
            </div>
        </Col>

        <Col sm={12} xs={12} className="custom-col">
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
        <Col sm={12} xs={12} className="custom-col">
            <div className='customInput'>
                <input value={balanceDueTitle} onInput={(event) => handleCustomInputs('balancedue_title', event.target.value)} className='text-end' placeholder='Balance Due' />
            </div>
            <div className='customInputbutton d-flex justify-content-end px-4'>
                <span className='d-flex justify-content-end'>{`${currency.toString().substring(0, 3)}${balance}.00`}</span>
            </div>
        </Col >
    </>)
}
export default TotalPage