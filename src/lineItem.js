import React from "react";
import { Col } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";

const LineButton = ({ handleAddRow }) => {

    return (
        <Col className='line-col text-start'>
            <button onClick={() => handleAddRow()} className="d-flex align-items-center"><span><IoMdAdd size={15} /></span> <span>Line Item</span></button>
        </Col>
    )
}

export default LineButton