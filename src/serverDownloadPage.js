import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const ServerDownloadPage = ({
    index,
    invoice,
    downloadCurrentPage,
    userData
}) => {
    console.log(invoice.logo)
    return (<Container key={index} className="invoice-container" ref={downloadCurrentPage}>
        <Row className="header-row">
            <Col className="text-center logo-col">
                <img src={`https://expressbuckett.s3.eu-west-2.amazonaws.com/invoicelogo/${invoice.logo}`} alt="Company Logo" className="logo" />
            </Col>
        </Row>

        <Row className="info-title">
            <Col lg={12}>
                <div className="sender-info">
                    <b>From:</b>
                    <div>{invoice.whoIsFrom}</div>
                </div>
            </Col>
        </Row>

        <Row className="info-row">
            <Col lg={5}>
                <div className="bill-to-info">
                    <b>{invoice.billToTitle}:</b>
                    <div>{invoice.billTo}</div>
                </div>
            </Col>
            <Col lg={5} className="invoice-info">
                <div>
                    <b>Invoice Number:</b> {invoice.invoiceNum}
                </div>
                <div>
                    <b>{invoice.dateTitle}:</b> {invoice.date}
                </div>
                <div>
                    <b>{invoice.dueDateTitle}:</b> {invoice.dueDate}
                </div>
            </Col>
        </Row>

        <Row className="info-row">
            <Col lg={5}>
                <div className="address-info">
                    <b>{invoice.addressTitle}:</b>
                    <div>{invoice.address}</div>
                </div>
            </Col>
            <Col lg={5} className="po-info">
                <div>
                    <b>{invoice.poTitle}:</b> {invoice.poNumber}
                </div>
                <div>
                    <b>{invoice.paymentTitle}:</b> {invoice.paymentTerms}
                </div>
            </Col>
        </Row>

        <div className="dotted-line"></div>

        <Col className="table-col">
            <Table bordered>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.rate}</td>
                            <td>{item.quantity}</td>
                            <td>{invoice.currency}{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>

        <div className="dotted-line"></div>

        <Row className="footer-row">
            <Col lg={5} className="notes-col">
                <div>
                    <b>{invoice.noteTitle}:</b>
                    <p>{invoice.note}</p>
                </div>
                <div>
                    <b className="footer-title">{invoice.termsTitle}:</b>
                    <p className="footer-content">{invoice.terms}</p>
                </div>
            </Col>

            <Col lg={5} className="summary-col">
                <div className="mb-2">
                    <b>{invoice.subTotalTitle}:</b> {invoice.currency}{invoice.subTotal}
                </div>
                {invoice.isDiscount === 1 && (
                    <div className="my-2">
                        <b>{invoice.discountTitle}:</b> {invoice.currency}{invoice.discountAmount}
                    </div>
                )}
                {invoice.isShipping === 1 && (
                    <div className="my-2">
                        <b>{invoice.taxTitle}:</b> {invoice.currency}{invoice.taxAmount}
                    </div>
                )}
                {invoice.isTax === 1 && (
                    <div className="my-2">
                        <b>{invoice.shippingTitle}:</b> {invoice.currency}{invoice.shippingAmount}
                    </div>
                )}
                <div className="my-2">
                    <b>{invoice.amountPaidTitle}:</b> {invoice.currency}{invoice.amountPaid}
                </div>
                <div className="my-2">
                    <b>{invoice.balanceDueTitle}:</b> {invoice.currency}{invoice.balance}
                </div>
                <div className="mt-2">
                    <b>{invoice.totalTitle}:</b> {invoice.currency}{invoice.total}
                </div>
            </Col>
        </Row>
    </Container>)
}
export default ServerDownloadPage