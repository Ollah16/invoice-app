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
                    <InputField
                        value={dateTitle}
                        aria-label='Date Title'
                        type='text'
                        onChange={(value) => handleCustomInputs('DATE_TITLE', value)} />
                </Col>

                <Col className="p-0 meta-value-input">
                    <InputField
                        value={date}
                        aria-label='Date Value'
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('DATE', value)}
                        type='date' />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField
                        value={paymentTitle}
                        aria-label='Payment Title'
                        type='text'
                        onChange={(value) => handleCustomInputs('PAYMENT_TITLE', value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={paymentTerms}
                        aria-label='Payment Terms'
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('PAYMENT_TERMS', value)}
                        type='text' />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField
                        value={dueDateTitle}
                        aria-label='Due Date Title'
                        type='text'
                        onChange={(value) => handleCustomInputs('DUE_DATE_TITLE', value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={dueDate}
                        aria-label='Due Date Value'
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('DUE_DATE', value)}
                        type='date'
                        placeholder="Recipient's username" />
                </Col>
            </Row>

            <Row className='invoice-data d-flex justify-content-between p-0 meta-field-row'>
                <Col className="p-0 label-input">
                    <InputField
                        value={poTitle}
                        aria-label='Purchase Order Title'
                        type='text'
                        onChange={(value) => handleCustomInputs('PO_TITLE', value)} />
                </Col>
                <Col className="p-0 meta-value-input">
                    <InputField
                        value={poNumber}
                        className={"w-100 d-inline-block"}
                        onChange={(value) => handleCustomInputs('PO_NUMBER', value)}
                        aria-label="Purchase Order Number"
                        type='number'
                        aria-describedby="basic-addon2"
                    />
                </Col>
            </Row>
        </Row>
    </Col>)
}

export default InvoiceDateDetails
