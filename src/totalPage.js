import React from 'react'
import { Col } from 'react-bootstrap'
import { useAppContext } from './context/AppContext'
import InputField from './components/common/InputField';

const TotalAllPage = () => {

    const { state: { balanceDueTitle, totalTitle, amountPaidTitle, total, balance, amountPaid, currency }, handleCustomInputs, handleInputValue } = useAppContext();

    return (<>
        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <InputField value={totalTitle} onChange={(value) => handleCustomInputs('TOTAL_TITLE', value)} className='text-end' placeholder='Total' />
            </div>
            <div className='customInputbutton text-end justify-content-end'>
                {`${currency.toString().substring(0, 3)}${total}.00`}
            </div>
        </Col>

        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <InputField value={amountPaidTitle} onChange={(value) => handleCustomInputs('AMOUNT_PAID_TITLE', value)} className='text-end' placeholder='Amount Paid' />
            </div>
            <div className='customInputbutton'>
                <InputField
                    className='customAmount text-end'
                    value={amountPaid}
                    onChange={(value) => handleInputValue('AMOUNT_PAID', value)}
                />
            </div>
        </Col>

        <Col lg={12} md={12} className="custom-col">
            <div className='customInput'>
                <InputField value={balanceDueTitle} onChange={(value) => handleCustomInputs('BALANCE_DUE_TITLE', value)} className='text-end' placeholder='Balance Due' />
            </div>
            <div className='customInputbutton text-end d-flex justify-content-end'>
                <span className='d-flex justify-content-end'>{`${currency.toString().substring(0, 3)}${balance}.00`}</span>
            </div>
        </Col >
    </>
    )
}
export default TotalAllPage