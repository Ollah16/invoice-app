import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppContext } from '../../context/AppContext'
import InputField from '../common/InputField'
import Button from '../common/Button'
import { RxCross2 } from 'react-icons/rx'
import { IoMdAdd } from 'react-icons/io'

const InvoiceCharges = () => {

    const { state: { discountTitle, taxTitle, shippingTitle, isShipping, isDiscount, isTax, taxAmount, shippingAmount, discountValue }, handleCustomInputs, handleInputValue, handleInputsBtn } = useAppContext()

    return (<Col lg={12} md={12} className='my-2'>

        {isDiscount === 1 &&
            <Row className='p-0 justify-content-between my-1'>
                <Col lg={7} md={7} className='label-input'>
                    <InputField
                        value={discountTitle}
                        onChange={(value) => handleCustomInputs('DISCOUNT_TITLE', value)}
                        aria-label='Discount Title'
                        type='text'
                        className='text-end'
                        placeholder='Discount' />
                </Col>
                <Col lg={5} md={5} className='charges-input-value d-flex justify-content-end p-0'>
                    <InputField
                        value={discountValue}
                        onChange={(value) => handleInputValue('DISCOUNT', value)}
                        aria-label='Discount Cost'
                        type='number'
                        className='text-end w-100'
                        placeholder='%' />

                    <Button className='cancel-button'
                        onClick={() => handleInputsBtn('IS_NOT_DISCOUNT')}>
                        <span><RxCross2 /></span>
                    </Button>
                </Col>
            </Row>}

        {
            isTax === 1 &&
            <Row className='p-0 justify-content-between my-1'>
                <Col lg={7} md={7} className='label-input'>
                    <InputField
                        value={taxTitle}
                        onChange={(value) => handleCustomInputs('TAX_TITLE', value)}
                        aria-label='Tax Title'
                        type='text'
                        className='text-end'
                        placeholder='Tax' />
                </Col>
                <Col lg={5} md={5} className='charges-input-value d-flex justify-content-end p-0'>
                    <InputField
                        value={taxAmount}
                        onChange={(value) => handleInputValue('TAX', value)}
                        aria-label='Tax Cost'
                        type='number'
                        className='text-end w-100'
                        placeholder='0'
                    />
                    <Button className='cancel-button'
                        onClick={() => handleInputsBtn('IS_NOT_TAX')}>
                        <span><RxCross2 /></span>
                    </Button>
                </Col>
            </Row>
        }

        {
            isShipping === 1 &&
            <Row className='p-0 justify-content-between my-1'>
                <Col lg={7} md={7} className='label-input'>
                    <InputField
                        value={shippingTitle}
                        onChange={(value) => handleCustomInputs('SHIPPING_TITLE', value)}
                        aria-label='Shipping Title'
                        type='text'
                        className='text-end'
                        placeholder='Shipping' />
                </Col>
                <Col lg={5} md={5} className='charges-input-value d-flex justify-content-end p-0'>
                    <InputField
                        value={shippingAmount}
                        onChange={(value) => handleInputValue('SHIPPING', value)}
                        aria-label='Shipping Cost'
                        type='number'
                        className='text-end'
                        placeholder='0' />

                    <Button className='cancel-button'
                        onClick={() => handleInputsBtn('IS_NOT_SHIPPING')}>
                        <span><RxCross2 /></span>
                    </Button>
                </Col>
            </Row>
        }


        <Col lg={12} md={12} className={`d-flex justify-content-end charges-button`}>
            {isDiscount === 0 && (
                <Button onClick={() => handleInputsBtn('IS_DISCOUNT')} className="d-flex justify-content-between align-items-center border-0 bg-transparent fw-semibold p-0 ms-3">
                    <span className="d-flex align-items-center"><IoMdAdd size={15} /></span><span>Discount</span>
                </Button>)}
            {isTax === 0 && (
                <Button onClick={() => handleInputsBtn('IS_TAX')} className="d-flex justify-content-between align-items-center border-0 bg-transparent fw-semibold p-0 ms-3">
                    <span className="d-flex align-items-center"><IoMdAdd size={15} /></span><span>Tax</span>
                </Button>)}
            {isShipping === 0 &&
                (<Button onClick={() => handleInputsBtn('IS_SHIPPING')} className="d-flex justify-content-between align-items-center border-0 bg-transparent fw-semibold p-0 ms-3">
                    <span className="d-flex align-items-center"><IoMdAdd size={15} /></span><span>Shipping</span>
                </Button>)}
        </Col>

    </Col>)
}

export default InvoiceCharges
