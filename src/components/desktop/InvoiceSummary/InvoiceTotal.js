import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppContext } from '../../../context/AppContext'
import InputField from '../../common/InputField';

const InvoiceTotal = () => {

    const { state: { balanceDueTitle, totalTitle, amountPaidTitle, total, balance, amountPaid, currency }, handleCustomInputs, handleInputValue } = useAppContext();

    return (<Col lg={12} md={12} className='d-flex flex-column gap-2'>
        <Row className='align-items-center justify-content-between'>
            <Col lg={7} md={7} className='label-input'>
                <InputField value={totalTitle} onChange={(value) => handleCustomInputs('TOTAL_TITLE', value)} className='text-end' placeholder='Total' />
            </Col>
            <Col lg={5} md={5} className='payment-input-value text-end justify-content-end overflow-auto'>
                {`${currency.toString().substring(0, 3)}${total}.00`}
            </Col>
        </Row>

        <Row className='align-items-center justify-content-between'>
            <Col lg={7} md={7} className='label-input'>
                <InputField value={amountPaidTitle} onChange={(value) => handleCustomInputs('AMOUNT_PAID_TITLE', value)} className='text-end' placeholder='Amount Paid' />
            </Col>
            <Col lg={5} md={5} className='payment-input-value ps-0'>
                <InputField
                    value={amountPaid}
                    onChange={(value) => handleInputValue('AMOUNT_PAID', value)}
                />
            </Col>
        </Row>

        <Row className='align-items-center justify-content-between'>
            <Col lg={7} md={7} className='label-input'>
                <InputField value={balanceDueTitle} onChange={(value) => handleCustomInputs('BALANCE_DUE_TITLE', value)} className='text-end' placeholder='Balance Due' />
            </Col>
            <Col lg={5} md={5} className='payment-input-value text-end d-flex justify-content-end overflow-auto'>
                {`${currency.toString().substring(0, 3)}${balance}.00`}
            </Col>
        </Row >
    </Col>
    )
}
export default InvoiceTotal