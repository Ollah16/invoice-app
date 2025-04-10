import React from "react";
import { Col } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import Button from "../common/Button";
import { useAppContext } from "../../context/AppContext";
import InputField from "../common/InputField";

const ImageComp = () => {

    const { handleLogo, handleRemoveLogo, state: { logo } } = useAppContext();

    return (
        <Col lg={6} md={6} className='file-input-col'>
            <div>
                {logo && <Button onClick={() => handleRemoveLogo('REMOVE')}><RxCross2 /></Button>}
                <label htmlFor='logo'>
                    {!logo ? '+ Add You Logo' : logo.name}
                </label>
                <InputField
                    id='logo'
                    type='file'
                    onChange={handleLogo}
                    className='text-center d-none'
                    placeholder="+ Add You Logo"
                    aria-describedby="Add Logo"
                />
            </div>
        </Col>
    )
}

export default ImageComp