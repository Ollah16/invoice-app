import React from "react";
import { Col } from "react-bootstrap";

const ImageComp = ({ handleLogo, state }) => {

    return (
        <Col lg={6} md={6} className='file-input-col'>
            <div>
                <label htmlFor='logo'>{!state.logo ? '+ Add You Logo' : state.logo.name}</label>
                <input
                    id='logo'
                    type='file'
                    onInput={handleLogo}
                    className='text-center d-none'
                    placeholder="+ Add You Logo"
                    aria-describedby="basic-addon1"
                />
            </div>
        </Col>
    )
}

export default ImageComp