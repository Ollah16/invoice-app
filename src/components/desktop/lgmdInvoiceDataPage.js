import React from "react";
import { Col } from "react-bootstrap";
import InputField from "../common/InputField";
import { useAppContext } from "../../context/AppContext";
import Button from "../common/Button";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

const InvoiceData = () => {

    const { state: { data }, handleDataChange, handleDeleteRow, handleAddRow } = useAppContext();

    return (
        <Col lg={12} md={12} className='invoice-data-table'>
            <div>
                <ul className="text-start">
                    <li>#</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Rate</li>
                    <li>Amount</li>
                    <li className={data.length ? 'display' : 'd-none'}></li>
                </ul>
                {data.map(({ description, quantity, rate, amount }, index) => (<ul key={index} className="table-inputs">
                    <li>{index + 1}</li>
                    <li><InputField value={description} onChange={(event) => handleDataChange('DESCRIPTION', event.target.value, index)} placeholder='item description' /></li>
                    <li><InputField value={quantity} onChange={(event) => handleDataChange('QUANTITY', event.target.value, index)} placeholder='1' /></li>
                    <li><InputField value={rate} onChange={(event) => handleDataChange('RATE', event.target.value, index)} placeholder='0' /></li>
                    <li><InputField className="border-0" value={amount} disabled={true} /></li>

                    {data.length && <li >
                        <Button onClick={() => handleDeleteRow(index)} >
                            <span><RxCross2 /></span></Button>
                    </li>}
                </ul>))}
            </div>

            <Col>
                <Button onClick={handleAddRow} className="d-flex align-items-center">
                    <span><IoMdAdd size={15} /></span> <span>Line Item</span>
                </Button>
            </Col>

        </Col >)
}
export default InvoiceData