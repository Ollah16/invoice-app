import React from "react";
import { Col } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import Button from "../common/Button";
import { useAppContext } from "../../context/AppContext";
import InputField from "../common/InputField";

const InvoiceLogoSection = () => {

    const { handleLogo, handleRemoveLogo, state: { logo } } = useAppContext();

    return (
        <Col lg={6} md={6} className='file-input-col'>
            <div className="position-relative">
                {logo && <Button onClick={() => handleRemoveLogo('REMOVE')}><RxCross2 /></Button>}
                <label htmlFor='logo'>
                    {!logo ? '+ Add Your Logo' : logo.name}
                </label>
                <InputField
                    id='logo'
                    type='file'
                    onInput={handleLogo}
                    className='text-center d-none'
                    placeholder="+ Add Your Logo"
                    aria-label='Add Logo'
                    aria-labelledby="Add Your Logo"
                />
            </div>
        </Col>
    )
}

export default InvoiceLogoSection