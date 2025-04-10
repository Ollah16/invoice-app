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
                        onChange={(event) => handleCustomInputs('WHOISFROM', event.target.value)}
                        value={whoIsFrom}
                        placeholder="Who is the invoice from? (required)" />
                </div>
            </Col>

            <Row className='justify-content-around smadjust'>
                <Col lg={6} md={6} className="custom-input-col">
                    <div className="custom-input-div">
                        <InputField value={billToTitle} onChange={(event) => handleCustomInputs('BILL_TITLE', event.target.value)} />
                    </div>
                    <div className="norm-Input-div">
                        <InputField
                            onChange={(event) => handleCustomInputs('BILL', event.target.value)}
                            value={billTo}
                            type="text"
                            placeholder="Who is the invoice to?(required)"
                        />
                    </div>
                </Col>

                <Col lg={6} md={6} className="custom-input-col">
                    <div className="custom-input-div">
                        <InputField value={addressTitle} onChange={(event) => handleCustomInputs('ADDRESS_TITLE', event.target.value)} />
                    </div>
                    <div className="norm-Input-div">
                        <InputField
                            onChange={(event) => handleCustomInputs('ADDRESS', event.target.value)}
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