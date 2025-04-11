import React from "react";
import { Col } from "react-bootstrap";
import LineButton from "./lineItem";
import DeleteRow from "./deleteRow";
import InputField from "./components/common/InputField";
import { useAppContext } from "./context/AppContext";

const InvoiceData = () => {

    const { state: { data }, handleInputChange, handleDeleteRow, handleAddRow } = useAppContext();

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
                {data.map(({ description, quantity, rate }, index) => (<ul key={index} className="table-inputs">
                    <li>{index + 1}</li>
                    <li><InputField value={description} onChange={(event) => handleInputChange('DESCRIPTION', event.target.value, index)} placeholder='item description' /></li>
                    <li><InputField value={quantity} onChange={(event) => handleInputChange('QUANTITY', event.target.value, index)} placeholder='1' /></li>
                    <li><InputField value={rate} onChange={(event) => handleInputChange('RATE', event.target.value, index)} placeholder='0' /></li>
                    <li><InputField className="border-0" value={amount} disabled={true} /></li>
                    {data.length && <li ><DeleteRow handleDeleteRow={handleDeleteRow} index={index} state={state} /></li>}
                </ul>))}
            </div>

            <LineButton handleAddRow={handleAddRow} />
        </Col >)
}
export default InvoiceData