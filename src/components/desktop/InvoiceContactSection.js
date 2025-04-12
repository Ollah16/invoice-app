import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import InputField from "../common/InputField";

const InvoiceContactSection = () => {

    const { state: { whoIsFrom, billTo, billToTitle, address, addressTitle }, handleCustomInputs, handleBlur } = useAppContext();

    return (
        <Col lg={7} className="d-flex flex-column gap-2">
            <Row lg={9} md={9}>
                <Col className="contact-value-input">
                    <InputField
                        fieldName="WHOISFROM"
                        onChange={(value) => handleCustomInputs('WHOISFROM', value)}
                        value={whoIsFrom}
                        onBlur={() => handleBlur('WHOISFROM', whoIsFrom)}
                        type="text"
                        placeholder="Who is the invoice from? (required)" />
                </Col>
            </Row>

            <Row className='justify-content-around'>
                <Col lg={6} md={6}>
                    <Col className="label-input mb-1">
                        <InputField
                            value={billToTitle}
                            onChange={(value) => handleCustomInputs('BILL_TITLE', value)}
                        />
                    </Col>
                    <Col className="contact-value-input">
                        <InputField
                            onChange={(value) => handleCustomInputs('BILL', value)}
                            value={billTo}
                            type="text"
                            placeholder="Who is the invoice to?(required)"
                        />
                    </Col>
                </Col>

                <Col lg={6} md={6}>
                    <Col className="label-input mb-1">
                        <InputField value={addressTitle} onChange={(value) => handleCustomInputs('ADDRESS_TITLE', value)} />
                    </Col>
                    <Col className="contact-value-input">
                        <InputField
                            onChange={(value) => handleCustomInputs('ADDRESS', value)}
                            type="text"
                            value={address}
                            placeholder="(optional)"
                        />
                    </Col>
                </Col>
            </Row>
        </Col >
    )
}

export default InvoiceContactSection		