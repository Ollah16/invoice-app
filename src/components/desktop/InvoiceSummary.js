import React from "react";
import { Col } from "react-bootstrap";
import TotalAllPage from "../../totalPage";
import InputField from "../common/InputField";
import { useAppContext } from "../../context/AppContext";
import InvoiceCharges from "./InvoiceCharges";


const InvoiceSummary = () => {

    const { state: { subTotalTitle, subTotal, currency }, handleCustomInputs } = useAppContext()

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

            <InvoiceCharges />

            <TotalAllPage />
        </Col >)
}
export default InvoiceSummary