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
                    <InputField value={dateTitle} onChange={(event) => handleCustomInputs('DATE_TITLE', event.target.value)} />
                </Col>

                <Col className="p-0 meta-value-input">
                    <InputField
                        value={date}
                        className={"w-100 d-inline-block"}
                        onChange={(event) => handleCustomInputs('DATE', event.target.value)}
                        type='date' />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={paymentTitle} onChange={(event) => handleCustomInputs('PAYMENT_TITLE', event.target.value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={paymentTerms}
                        className={"w-100 d-inline-block"}
                        onChange={(event) => handleCustomInputs('PAYMENT_TERMS', event.target.value)}
                        type='text' />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={dueDateTitle} onChange={(event) => handleCustomInputs('DUE_DATE_TITLE', event.target.value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={dueDate}
                        className={"w-100 d-inline-block"}
                        onChange={(event) => handleCustomInputs('DUE_DATE', event.target.value)}
                        type='date'
                        placeholder="Recipient's username" />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField value={poTitle} onChange={(event) => handleCustomInputs('PO_TITLE', event.target.value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={poNumber}
                        className={"w-100 d-inline-block"}
                        onChange={(event) => handleCustomInputs('PO_NUMBER', event.target.value)}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </Col>
            </Row>
        </Row>
    </Col>)
}

export default InvoiceDateDetails
