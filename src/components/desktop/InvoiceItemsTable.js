import React from "react";
import { Col } from "react-bootstrap";
import InputField from "../common/InputField";
import { useAppContext } from "../../context/AppContext";
import Button from "../common/Button";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

const InvoiceItemsTable = () => {

    const { state: { data }, handleDataChange, handleDeleteRow, handleAddRow } = useAppContext();

    return (
        <Col lg={12} md={12} >
            <table className='invoice-data-table'>
                <thead className="text-start">
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                        {data.length > 1 && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ description, quantity, rate, amount }, index) =>
                    (<tr key={index} className="table-inputs">
                        <td>{index + 1}</td>
                        <td><InputField value={description} onChange={(value) => handleDataChange('DESCRIPTION', value, index)} placeholder='Item Description' /></td>
                        <td><InputField value={quantity} onChange={(value) => handleDataChange('QUANTITY', value, index)} placeholder='1' /></td>
                        <td><InputField value={rate} onChange={(value) => handleDataChange('RATE', value, index)} placeholder='0' /></td>
                        <td><InputField className="border-0" value={amount?.toFixed(2)} disabled={true} /></td>

                        {data.length > 1 && <td>
                            <Button className={`py-0 border-0 bg-transparent`} onClick={() => handleDeleteRow(index)} >
                                <span><RxCross2 /></span>
                            </Button>
                        </td>}

                    </tr>))}
                </tbody>
            </table>

            <Col className='line-col text-start'>
                <Button onClick={handleAddRow} className="d-flex align-items-center">
                    <span><IoMdAdd size={15} /></span> <span>Line Item</span>
                </Button>
            </Col>

        </Col >)
}
export default InvoiceItemsTable