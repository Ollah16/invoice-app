import React from "react"
import { Col } from "react-bootstrap"

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
                        <span>{data.length > 1 && <button className='py-0 border-0 bg-transparent' onClick={() => handleDeleteRow(index)}>x</button>}</span>
                    </div>
                    <div >
                        <span>
                            <input className="text-start" value={each.rate} onInput={(event) => handleDataInp('rate', Number(event.target.value), index)} placeholder='0' />
                        </span>
                        <span>
                            <input className="text-start" value={each.quantity} onInput={(event) => handleDataInp('quantity', Number(event.target.value), index)} placeholder='1' />
                        </span>
                    </div>
                    <div>
                        <input className='w-100 text-start' value={each.description} onInput={(event) => handleDataInp('description', event.target.value, index)} placeholder='Description of service or product' />
                    </div>
                </div>))}
            <Col className='line-col'>
                <button onClick={() => handleAddRow()}>+ Line Item</button>
            </Col>
        </Col>)
}
export default InvoiceData