import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdOutlineArrowBack } from 'react-icons/md'

const ReturnBtn = ({ handleNavigation }) => {

    return (
        <Row>
            <Col lg={2} md={2} sm={4} xs={4} className='return-col'>
                <button onClick={() => handleNavigation('/')}> <MdOutlineArrowBack /><span>Back</span></button>
            </Col>
        </Row>
    )
}

export default ReturnBtn