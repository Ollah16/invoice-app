import React from "react"
import { Col, Row } from "react-bootstrap"
import TotalPage from "./smxstotalPage"
const CustomDataPage = ({
    handleInputs,
    state,
    handleCustomInputs,
    handleInputsBtn
}) => {

    let { discountTitle, taxTitle, shippingTitle, subTotal, isShipping, isDiscount, isTax, currency, subTotalTitle } = state

    return (<Row>
        <Col sm={12} xs={12} className='custom-col'>
            <div className='customInput'>
                <input value={subTotalTitle} onInput={(event) => handleCustomInputs('subtotal_title', event.target.value)} className='text-end' placeholder='Subtotal' />
            </div>
            <div className='customInputbutton d-flex justify-content-end px-4'>
                {`${currency.toString().substring(0, 3)}${subTotal}.00`}
            </div>
        </Col>

        {isDiscount === 1 &&
            <Col sm={12} xs={12} className='custom-col'>
                <div className='customInput'>
                    <input value={discountTitle} onInput={(event) => handleCustomInputs('discount_title', event.target.value)} className='text-end' placeholder='Discount' />
                </div>
                <div className='customInputbutton'>
                    <input className='text-end'
                        onInput={(event) => handleInputs('discount', Number(event.target.value))} placeholder='%' />
                    <button className='cancel-button'
                        onClick={() => handleInputsBtn('xdiscount')}>
                        x
                    </button>
                </div>
            </Col>}

        {isTax === 1 &&
            <Col sm={12} xs={12} className='custom-col'>
                <div className='customInput'>
                    <input value={taxTitle} onInput={(event) => handleCustomInputs('tax_title', event.target.value)} className='text-end' placeholder='Tax' />
                </div>
                <div className='customInputbutton'>
                    <input className='text-end'
                        onInput={(event) => handleInputs('tax', Number(event.target.value))} placeholder='%' />
                    <button className='cancel-button'
                        onClick={() => handleInputsBtn('xtax')}>
                        x
                    </button>
                </div>
            </Col>}

        {isShipping === 1 &&
            <Col sm={12} xs={12} className='custom-col'>
                <div className='customInput'>
                    <input value={shippingTitle} onInput={(event) => handleCustomInputs('shipping_title', event.target.value)} className='text-end' placeholder='Shipping' />
                </div>
                <div className='customInputbutton'>
                    <input className='text-end'
                        onInput={(event) => handleInputs('shipping', Number(event.target.value))} placeholder='%' />
                    <button className='cancel-button'
                        onClick={() => handleInputsBtn('xshipping')}>
                        x
                    </button>
                </div>
            </Col>}

        <Col sm={12} xs={12} className='custom-btn px-4'>
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

        <TotalPage state={state} handleInputs={handleInputs} handleCustomInputs={handleCustomInputs} />
    </Row>)
}
export default CustomDataPage