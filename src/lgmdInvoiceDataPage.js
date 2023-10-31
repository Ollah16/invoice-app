import React from "react";
import { Col, Table } from "react-bootstrap";

const InvoiceData = ({
    handleDataInp,
    state,
    handleDeleteRow,
    handleAddRow
}) => {
    let { currency, data } = state

    return (
        <Col lg={12} md={12} className='table-responsive invoice-data-table'>
            <Table bordered >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th className="text-end">Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((each, index) => (<tr key={index} className="table-inputs">
                        <td>{index + 1}</td>
                        <td><input value={each.description} onInput={(event) => handleDataInp('description', event.target.value, index)} placeholder='item description' /></td>
                        <td><input value={each.quantity} onInput={(event) => handleDataInp('quantity', Number(event.target.value), index)} placeholder='1' /></td>
                        <td><input value={each.rate} onInput={(event) => handleDataInp('rate', Number(event.target.value), index)} placeholder='0' /></td>
                        <td className="text-end">{currency}{each.amount}.00</td>
                        <td>{data.length > 1 && <button className='py-0 border-0 bg-transparent' onClick={() => handleDeleteRow(index)}>x</button>}</td>
                    </tr>))}
                </tbody>
            </Table>

            <Col className='line-col text-start'>
                <button onClick={() => handleAddRow()}><span>+</span> <span>Line Item</span></button>
            </Col>
        </Col>)
}
export default InvoiceData