import React from "react";
import { Col } from "react-bootstrap";
import TotalAllPage from "./totalPage";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

const CustomDataPage = ({
    handleInputValue,
    state,
    handleCustomInputs,
    handleInputsBtn
}) => {

    const { discountTitle, taxTitle, shippingTitle, subTotalTitle, subTotal, isShipping, isDiscount, isTax, currency } = state
    return (
        <Col lg={5} md={5} >
            <Col lg={12} md={12} className='custom-col'>
                <div className='customInput'>
                    <input value={subTotalTitle} onInput={(event) => handleCustomInputs('SUB_TOTAL_TITLE', event.target.value)} className='text-end' placeholder='Subtotal' />
                </div>
                <div className='customInputbutton d-flex justify-content-end'>
                    {`${currency.toString().substring(0, 3)}${subTotal}.00`}
                </div>
            </Col>

            {isDiscount === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <input value={discountTitle} onInput={(event) => handleCustomInputs('DISCOUNT_TITLE', event.target.value)} className='text-end' placeholder='Discount' />
                    </div>
                    <div className='customInputbutton'>
                        <input className='text-end'
                            onInput={(event) => handleInputValue('DISCOUNT', Number(event.target.value))} placeholder='%' />
                        <button className='cancel-button'
                            onClick={() => handleInputsBtn('IS_NOT_DISCOUNT')}>
                            <span><RxCross2 /></span>
                        </button>
                    </div>
                </Col>}

            {isTax === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <input value={taxTitle} onInput={(event) => handleCustomInputs('TAX_TITLE', event.target.value)} className='text-end' placeholder='Tax' />
                    </div>
                    <div className='customInputbutton'>
                        <input className='text-end'
                            onInput={(event) => handleInputValue('TAX', Number(event.target.value))} placeholder='%' />
                        <button className='cancel-button'
                            onClick={() => handleInputsBtn('IS_NOT_TAX')}>
                            <span><RxCross2 /></span>
                        </button>
                    </div>
                </Col>}

            {isShipping === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <input value={shippingTitle} onInput={(event) => handleCustomInputs('SHIPPING_TITLE', event.target.value)} className='text-end' placeholder='Shipping' />
                    </div>
                    <div className='customInputbutton'>
                        <input className='text-end'
                            onInput={(event) => handleInputValue('SHIPPING', Number(event.target.value))} placeholder='%' />
                        <button className='cancel-button'
                            onClick={() => handleInputsBtn('IS_NOT_SHIPPING')}>
                            <span><RxCross2 /></span>
                        </button>
                    </div>
                </Col>}


            <Col lg={12} md={12} className='custom-btn'>
                {isDiscount === 0 &&
                    <button onClick={() => handleInputsBtn('IS_DISCOUNT')} >
                        <span><IoMdAdd size={15} /></span><span>Discount</span>
                    </button>}
                {isTax === 0 &&
                    <button onClick={() => handleInputsBtn('IS_TAX')} >
                        <span><IoMdAdd size={15} /></span><span>Tax</span>
                    </button>}
                {isShipping === 0 &&
                    <button onClick={() => handleInputsBtn('IS_SHIPPING')} >
                        <span><IoMdAdd size={15} /></span><span>Shipping</span>
                    </button>}
            </Col>

            <TotalAllPage state={state} handleInputValue={handleInputValue} handleCustomInputs={handleCustomInputs} />
        </Col >)
}
export default CustomDataPage