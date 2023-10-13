import React from "react"
import { Col, Row } from "react-bootstrap"
import TotalPage from "./smxstotalPage"
const CustomDataPage = ({ handleInputs, state, handleCustomInputs, handleInputsBtn }) => {
    return (<Row>
        <Col sm={12} xs={12} className='custom-col'>
            <div className='customInput'>
                <input value={state.subtotal_title} onInput={(event) => handleCustomInputs('subtotal-title', event.target.value)} className='text-end' placeholder='Subtotal' />
            </div>
            <div className='customInputbutton d-flex justify-content-end px-4'>
                {`${state.currency.toString().substring(0, 3)}${state.subTotal}.00`}
            </div>
        </Col>

        {state.isDiscount &&
            <Col sm={12} xs={12} className='custom-col'>
                <div className='customInput'>
                    <input value={state.discount_title} onInput={(event) => handleCustomInputs('discount-title', event.target.value)} className='text-end' placeholder='Discount' />
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

        {state.isTax &&
            <Col sm={12} xs={12} className='custom-col'>
                <div className='customInput'>
                    <input value={state.tax_title} onInput={(event) => handleCustomInputs('tax-title', event.target.value)} className='text-end' placeholder='Tax' />
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

        {state.isShipping &&
            <Col sm={12} xs={12} className='custom-col'>
                <div className='customInput'>
                    <input value={state.shipping_title} onInput={(event) => handleCustomInputs('shipping-title', event.target.value)} className='text-end' placeholder='Shipping' />
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
            {!state.isDiscount &&
                <button onClick={() => handleInputsBtn('+discount')} >
                    +Discount
                </button>}
            {!state.isTax &&
                <button onClick={() => handleInputsBtn('+tax')} >
                    +Tax
                </button>}
            {!state.isShipping &&
                <button onClick={() => handleInputsBtn('+shipping')} >
                    +Shipping
                </button>}
        </Col>

        <TotalPage state={state} handleInputs={handleInputs} handleCustomInputs={handleCustomInputs} />
    </Row>)
}
export default CustomDataPage