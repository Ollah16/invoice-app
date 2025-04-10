import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";
import InputField from "./components/common/InputField";

const InvInfo = () => {

    const { state: { whoIsFrom, billTo, billToTitle, address, addressTitle }, handleCustomInputs } = useAppContext();

    return (
        <Col >
            <Col lg={9} md={9} className="custom-input-col">
                <div className="norm-Input-div">
                    <InputField
                        onChange={(value) => handleCustomInputs('WHOISFROM', value)}
                        value={whoIsFrom}
                        placeholder="Who is the invoice from? (required)" />
                </div>
            </Col>

            <Row className='justify-content-around smadjust'>
                <Col lg={6} md={6} className="custom-input-col">
                    <div className="custom-input-div">
                        <InputField value={billToTitle} onChange={(value) => handleCustomInputs('BILL_TITLE', value)} />
                    </div>
                    <div className="norm-Input-div">
                        <InputField
                            onChange={(value) => handleCustomInputs('BILL', value)}
                            value={billTo}
                            type="text"
                            placeholder="Who is the invoice to?(required)"
                        />
                    </div>
                </Col>

                <Col lg={6} md={6} className="custom-input-col">
                    <div className="custom-input-div">
                        <InputField value={addressTitle} onChange={(value) => handleCustomInputs('ADDRESS_TITLE', value)} />
                    </div>
                    <div className="norm-Input-div">
                        <InputField
                            onChange={(value) => handleCustomInputs('ADDRESS', value)}
                            type="text"
                            value={address}
                            placeholder="(optional)"
                        />
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default InvInfo