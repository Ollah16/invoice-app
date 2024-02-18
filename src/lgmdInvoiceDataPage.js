import React from "react";
import { Col } from "react-bootstrap";
import LineButton from "./lineItem";
import DeleteRow from "./deleteRow";

const InvoiceData = ({
    handleDataInp,
    state,
    handleDeleteRow,
    handleAddRow
}) => {
    let { data } = state

    return (
        <Col lg={12} md={12} className='invoice-data-table'>
            <div>
                <ul className="text-start">
                    <li>#</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Rate</li>
                    <li>Amount</li>
                    <li className={data.length > 1 ? 'display' : 'd-none'}></li>
                </ul>
                {data.map((each, index) => (<ul key={index} className="table-inputs">
                    <li>{index + 1}</li>
                    <li><input value={each.description} onInput={(event) => handleDataInp('DESCRIPTION', event.target.value, index)} placeholder='item description' /></li>
                    <li><input value={each.quantity} onInput={(event) => handleDataInp('QUANTITY', Number(event.target.value), index)} placeholder='1' /></li>
                    <li><input value={each.rate} onInput={(event) => handleDataInp('RATE', Number(event.target.value), index)} placeholder='0' /></li>
                    <li><input className="border-0" value={`${each.amount}.00`} disabled /></li>
                    <li className={data.length > 1 ? 'display' : 'd-none'}><DeleteRow handleDeleteRow={handleDeleteRow} index={index} state={state} /></li>
                </ul>))}
            </div>

            <LineButton
                handleAddRow={handleAddRow} />
        </Col >)
}
export default InvoiceData