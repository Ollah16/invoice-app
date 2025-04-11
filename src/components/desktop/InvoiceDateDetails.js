import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import InputField from "../common/InputField";

const InvoiceDateDetails = () => {

    const { state: { dateTitle, date, paymentTerms, paymentTitle, dueDate, dueDateTitle, poNumber, poTitle }, handleCustomInputs } = useAppContext();

    return (<Col lg={4}>
        <Row className="d-flex flex-column gap-2 invoice-meta-fields">
            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={dateTitle} onChange={(value) => handleCustomInputs('DATE_TITLE', value)} />
                </Col>

                <Col className="p-0 meta-value-input">
                    <InputField
                        value={date}
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('DATE', value)}
                        type='date' />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={paymentTitle} onChange={(value) => handleCustomInputs('PAYMENT_TITLE', value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={paymentTerms}
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('PAYMENT_TERMS', value)}
                        type='text' />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={dueDateTitle} onChange={(value) => handleCustomInputs('DUE_DATE_TITLE', value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={dueDate}
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('DUE_DATE', value)}
                        type='date'
                        placeholder="Recipient's username" />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={poTitle} onChange={(value) => handleCustomInputs('PO_TITLE', value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={poNumber}
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('PO_NUMBER', value)}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </Col>
            </Row>
        </Row>
    </Col>)
}

export default InvoiceDateDetails
