import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InputField from '../../common/InputField'
import { useAppContext } from '../../../context/AppContext'

const InvoiceSubTotal = () => {
    const { state: { subTotalTitle, subTotal, currency }, handleCustomInputs } = useAppContext()

    return (
        <Col lg={12} md={12} >
            <Row className='justify-content-between align-items-center'>
                <Col lg={7} md={6} className='label-input'>
                    <InputField value={subTotalTitle} onChange={(value) => handleCustomInputs('SUB_TOTAL_TITLE', value)} className='text-end' placeholder='Subtotal' />
                </Col>
                <Col lg={5} md={6} className='d-flex justify-content-end overflow-auto'>
                    {`${currency.toString().substring(0, 3)}${subTotal}.00`}
                </Col>
            </Row>
        </Col>)
}

export default InvoiceSubTotal