import React from 'react'
import { Col } from 'react-bootstrap'
import InputField from '../../common/InputField'
import { useAppContext } from '../../../context/AppContext'

const InvoiceSubTotal = () => {
    const { state: { subTotalTitle, subTotal, currency }, handleCustomInputs } = useAppContext()

    return (
        <Col lg={12} md={12} className='custom-col'>
            <div className='customInput'>
                <InputField value={subTotalTitle} onChange={(value) => handleCustomInputs('SUB_TOTAL_TITLE', value)} className='text-end' placeholder='Subtotal' />
            </div>
            <div className='customInputbutton d-flex justify-content-end'>
                {`${currency.toString().substring(0, 3)}${subTotal}.00`}
            </div>
        </Col>)
}

export default InvoiceSubTotal