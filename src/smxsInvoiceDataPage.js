import React from "react"
import { Col } from "react-bootstrap"
import LineButton from "./lineItem"
import DeleteRow from "./deleteRow"

const InvoiceData = ({
    handleDataInp,
    state,
    handleDeleteRow,
    handleAddRow }) => {

    let { data, currency } = state
    return (
        <Col sm={12} xs={12} >
            {data.map((each, index) => (
                <div key={index} className='invoice-data-div'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span><span> Amount:</span><span>{`${currency}${each.amount}.00`}</span></span>
                        <DeleteRow handleDeleteRow={handleDeleteRow} state={state} index={index} />
                    </div>
                    <div >
                        <span>
                            <input className="text-start" value={each.rate} onInput={(event) => handleDataInp('RATE', Number(event.target.value), index)} placeholder='0' />
                        </span>
                        <span>
                            <input className="text-start" value={each.quantity} onInput={(event) => handleDataInp('QUANTITY', Number(event.target.value), index)} placeholder='1' />
                        </span>
                    </div>
                    <div>
                        <input className='w-100 text-start' value={each.description} onInput={(event) => handleDataInp('DESCRIPTION', event.target.value, index)} placeholder='Description of service or product' />
                    </div>
                </div>))}

            <LineButton handleAddRow={handleAddRow} />
        </Col>)
}
export default InvoiceData