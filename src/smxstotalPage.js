import React from "react";
import { Col } from "react-bootstrap";
const TotalPage = ({ state, handleCustomInputs, handleInputs }) => {
    return (<>
        <Col sm={12} xs={12} className="custom-col">
            <div className='customInput'>
                <input value={state.total_title} onInput={(event) => handleCustomInputs('total-title', event.target.value)} className='text-end' placeholder='Total' />
            </div>
            <div className='customInputbutton d-flex justify-content-end px-4'>
                {`${state.currency.toString().substring(0, 3)}${state.total}.00`}
            </div>
        </Col>

        <Col sm={12} xs={12} className="custom-col">
            <div className='customInput'>
                <input value={state.amountpaid_title} onInput={(event) => handleCustomInputs('amountpaid-title', event.target.value)} className='text-end' placeholder='Amount Paid' />
            </div>
            <div className='customInputbutton'>
                <input
                    className='customAmount text-end'
                    value={state.amountPaid}
                    onInput={(event) => handleInputs('amountpaid', event.target.value)}
                />
            </div>
        </Col>

        <Col sm={12} xs={12} className="custom-col">
            <div className='customInput'>
                <input value={state.balancedue_title} onInput={(event) => handleCustomInputs('balancedue-title', event.target.value)} className='text-end' placeholder='Balance Due' />
            </div>
            <div className='customInputbutton d-flex justify-content-end px-4'>
                <span className='d-flex justify-content-end'>{`${state.currency.toString().substring(0, 3)}${state.balance}.00`}</span>
            </div>
        </Col >
    </>)
}
export default TotalPage