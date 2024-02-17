import React from "react";
import { Col } from "react-bootstrap";
import TotalAllPage from "./totalPage";
import { RxCross2 } from "react-icons/rx";

const CustomDataPage = ({
    handleInputs,
    state,
    handleCustomInputs,
    handleInputsBtn
}) => {

    const { discountTitle, taxTitle, shippingTitle, subTotalTitle, subTotal, isShipping, isDiscount, isTax, currency } = state
    return (
        <Col lg={5} md={5} >
            <Col lg={12} md={12} className='custom-col'>
                <div className='customInput'>
                    <input value={subTotalTitle} onInput={(event) => handleCustomInputs('subtotal_title', event.target.value)} className='text-end' placeholder='Subtotal' />
                </div>
                <div className='customInputbutton d-flex justify-content-end'>
                    {`${currency.toString().substring(0, 3)}${subTotal}.00`}
                </div>
            </Col>

            {isDiscount === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <input value={discountTitle} onInput={(event) => handleCustomInputs('discount_title', event.target.value)} className='text-end' placeholder='Discount' />
                    </div>
                    <div className='customInputbutton'>
                        <input className='text-end'
                            onInput={(event) => handleInputs('discount', Number(event.target.value))} placeholder='%' />
                        <button className='cancel-button'
                            onClick={() => handleInputsBtn('xdiscount')}>
                            <span><RxCross2 /></span>
                        </button>
                    </div>
                </Col>}

            {isTax === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <input value={taxTitle} onInput={(event) => handleCustomInputs('tax_title', event.target.value)} className='text-end' placeholder='Tax' />
                    </div>
                    <div className='customInputbutton'>
                        <input className='text-end'
                            onInput={(event) => handleInputs('tax', Number(event.target.value))} placeholder='%' />
                        <button className='cancel-button'
                            onClick={() => handleInputsBtn('xtax')}>
                            <span><RxCross2 /></span>
                        </button>
                    </div>
                </Col>}

            {isShipping === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <input value={shippingTitle} onInput={(event) => handleCustomInputs('shipping_title', event.target.value)} className='text-end' placeholder='Shipping' />
                    </div>
                    <div className='customInputbutton'>
                        <input className='text-end'
                            onInput={(event) => handleInputs('shipping', Number(event.target.value))} placeholder='%' />
                        <button className='cancel-button'
                            onClick={() => handleInputsBtn('xshipping')}>
                            <span><RxCross2 /></span>
                        </button>
                    </div>
                </Col>}


            <Col lg={12} md={12} className='custom-btn'>
                {isDiscount === 0 &&
                    <button onClick={() => handleInputsBtn('+discount')} >
                        +Discount
                    </button>}
                {isTax === 0 &&
                    <button onClick={() => handleInputsBtn('+tax')} >
                        +Tax
                    </button>}
                {isShipping === 0 &&
                    <button onClick={() => handleInputsBtn('+shipping')} >
                        +Shipping
                    </button>}
            </Col>

            <TotalAllPage state={state} handleInputs={handleInputs} handleCustomInputs={handleCustomInputs} />
        </Col >)
}
export default CustomDataPage