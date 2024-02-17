import React, { useEffect } from "react";
import { Col, Table } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

const InvoiceData = ({
    handleDataInp,
    state,
    handleDeleteRow,
    handleAddRow
}) => {
    let { currency, data } = state

    return (
        <Col lg={12} md={12} className='invoice-data-table'>
            <div>
                <ul className="text-start">
                    <li>#</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Rate</li>
                    <li>Amount</li>
                    <li className={data.length > 1 ? 'display' : ''}></li>
                </ul>
                {data.map((each, index) => (<ul key={index} className="table-inputs">
                    <li>{index + 1}</li>
                    <li><input value={each.description} onInput={(event) => handleDataInp('description', event.target.value, index)} placeholder='item description' /></li>
                    <li><input value={each.quantity} onInput={(event) => handleDataInp('quantity', Number(event.target.value), index)} placeholder='1' /></li>
                    <li><input value={each.rate} onInput={(event) => handleDataInp('rate', Number(event.target.value), index)} placeholder='0' /></li>
                    <li className="text-start">{currency}{each.amount}.00</li>
                    <li className={data.length > 1 ? 'display' : ''}> {data.length > 1 && <button className='py-0 border-0 bg-transparent' onClick={() => handleDeleteRow(index)}><span><RxCross2 /></span></button>}</li>
                </ul>))}
            </div>

            <Col className='line-col text-start'>
                <button onClick={() => handleAddRow()} className="d-flex align-items-center"><span><IoMdAdd size={15} /></span> <span>Line Item</span></button>
            </Col>
        </Col >)
}
export default InvoiceData