import React from "react";
import { Col } from "react-bootstrap";
import TotalAllPage from "./totalPage";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import InputField from "./components/common/InputField";
import Button from "./components/common/Button";
import { useAppContext } from "./context/AppContext";

const CustomDataPage = () => {

    const { state: { discountTitle, taxTitle, shippingTitle, subTotalTitle, subTotal, isShipping, isDiscount, isTax, currency, taxAmount, shippingAmount, discountAmount }, handleCustomInputs, handleInputValue, handleInputsBtn } = useAppContext()

    return (
        <Col lg={5} md={5} >
            <Col lg={12} md={12} className='custom-col'>
                <div className='customInput'>
                    <InputField value={subTotalTitle} onChange={(value) => handleCustomInputs('SUB_TOTAL_TITLE', value)} className='text-end' placeholder='Subtotal' />
                </div>
                <div className='customInputbutton d-flex justify-content-end'>
                    {`${currency.toString().substring(0, 3)}${subTotal}.00`}
                </div>
            </Col>

            {isDiscount === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <InputField value={discountTitle} onChange={(value) => handleCustomInputs('DISCOUNT_TITLE', value)} className='text-end' placeholder='Discount' />
                    </div>
                    <div className='customInputbutton'>
                        <InputField className='text-end'
                            value={discountAmount}
                            onChange={(value) => handleInputValue('DISCOUNT', value)} placeholder='%' />
                        <Button className='cancel-button'
                            onClick={() => handleInputsBtn('IS_NOT_DISCOUNT')}>
                            <span><RxCross2 /></span>
                        </Button>
                    </div>
                </Col>}

            {isTax === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>

                        <InputField value={taxTitle} onChange={(value) => handleCustomInputs('TAX_TITLE', value)} className='text-end' placeholder='Tax' />
                    </div>
                    <div className='customInputbutton'>
                        <InputField className='text-end'
                            value={taxAmount}
                            onChange={(value) => handleInputValue('TAX', value)} />
                        <Button className='cancel-button'
                            onClick={() => handleInputsBtn('IS_NOT_TAX')}>
                            <span><RxCross2 /></span>
                        </Button>
                    </div>
                </Col>}

            {isShipping === 1 &&
                <Col lg={12} md={12} className='custom-col'>
                    <div className='customInput'>
                        <InputField value={shippingTitle} onChange={(value) => handleCustomInputs('SHIPPING_TITLE', value)} className='text-end' placeholder='Shipping' />
                    </div>
                    <div className='customInputbutton'>
                        <InputField className='text-end'
                            value={shippingAmount}
                            onChange={(value) => handleInputValue('SHIPPING', value)} />
                        <Button className='cancel-button'
                            onClick={() => handleInputsBtn('IS_NOT_SHIPPING')}>
                            <span><RxCross2 /></span>
                        </Button>
                    </div>
                </Col>}


            <Col lg={12} md={12} className='custom-btn'>
                {isDiscount === 0 &&
                    <Button onClick={() => handleInputsBtn('IS_DISCOUNT')} >
                        <span><IoMdAdd size={15} /></span><span>Discount</span>
                    </Button>}
                {isTax === 0 &&
                    <Button onClick={() => handleInputsBtn('IS_TAX')} >
                        <span><IoMdAdd size={15} /></span><span>Tax</span>
                    </Button>}
                {isShipping === 0 &&
                    <Button onClick={() => handleInputsBtn('IS_SHIPPING')} >
                        <span><IoMdAdd size={15} /></span><span>Shipping</span>
                    </Button>}
            </Col>

            <TotalAllPage />
        </Col >)
}
export default CustomDataPage