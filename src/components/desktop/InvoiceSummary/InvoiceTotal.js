import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppContext } from '../../../context/AppContext'
import InputField from '../../common/InputField';

const InvoiceTotal = () => {

    const {
        state:
        { balanceDueTitle,
            totalTitle,
            amountPaidTitle,
            total,
            balance,
            amountPaid,
            currency },
        handleCustomInputs,
        handleInputValue } = useAppContext();

    const balanceValue = `${currency}${balance.toFixed(2)}`;
    const totalValue = `${currency}${total.toFixed(2)}`;

    return (<Col lg={12} md={12} className='d-flex flex-column gap-2'>
        <Row className='align-items-center justify-content-between'>
            <Col lg={7} md={7} className='label-input'>
                <InputField
                    value={totalTitle}
                    onChange={(value) => handleCustomInputs('TOTAL_TITLE', value)}
                    type='text'
                    aria-label='Total Title'
                    className='text-end'
                    placeholder='Total' />
            </Col>
            <Col lg={5} md={5} className='payment-input-value ps-0'>
                <InputField
                    value={totalValue}
                    type='text'
                    aria-label='Total Cost'
                    className='text-end border-0'
                    placeholder={totalValue}
                    readOnly />
            </Col>
        </Row>

        <Row className='align-items-center justify-content-between'>
            <Col lg={7} md={7} className='label-input'>
                <InputField
                    value={amountPaidTitle}
                    onChange={(value) => handleCustomInputs('AMOUNT_PAID_TITLE', value)}
                    type='text'
                    aria-label='Paid Title'
                    className='text-end'
                    placeholder='Amount Paid' />
            </Col>
            <Col lg={5} md={5} className='payment-input-value ps-0'>
                <InputField
                    value={amountPaid}
                    onChange={(value) => handleInputValue('AMOUNT_PAID', value)}
                    type='number'
                    aria-label='Amount Paid'
                    placeholder='0.00'
                    className='text-end'
                />
            </Col>
        </Row>

        <Row className='align-items-center justify-content-between'>
            <Col lg={7} md={7} className='label-input'>
                <InputField
                    value={balanceDueTitle}
                    onChange={(value) => handleCustomInputs('BALANCE_DUE_TITLE', value)}
                    type='text'
                    aria-label='Due Title'
                    className='text-end'
                    placeholder='Balance Due' />
            </Col>
            <Col lg={5} md={5} className='payment-input-value ps-0'>
                <InputField
                    value={balanceValue}
                    type='text'
                    aria-label='Balance Due'
                    className='text-end border-0'
                    placeholder={balanceValue}
                    readOnly />
            </Col>
        </Row >
    </Col>
    )
}
export default InvoiceTotal