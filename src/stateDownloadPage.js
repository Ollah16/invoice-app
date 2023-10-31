import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
const StateDownloadPage = ({ state, downloadCurrentPage }) => {

    const { discountTitle, termsTitle, taxTitle, shippingTitle, noteTitle, balanceDueTitle, totalTitle,
        subTotalTitle, amountPaidTitle, billToTitle, addressTitle, dueDateTitle, poTitle, paymentTitle, dateTitle,
        logo, whoIsFrom, billTo, address, poNumber, terms, invoiceNum, date, dueDate, paymentTerms, note, total, discountAmount, taxAmount,
        shippingAmount, balance, subTotal, amountPaid, isShipping, isDiscount, isTax, currency, data } = state

    return (<Container className="invoice-container" ref={downloadCurrentPage}>
        <Row className="header-row">
            <Col lg={12} className="logo-col">
                {logo && <img src={URL.createObjectURL(logo)} name="logo" alt="logo" />}
            </Col>
        </Row>

        <Row className="info-title">
            <Col lg={12}>
                <div className="sender-info">
                    <b>From:</b>
                    <div>{whoIsFrom}</div>
                </div>
            </Col>
        </Row>

        <Row className="info-row">
            <Col lg={5}>
                <div className="bill-to-info">
                    <b>{billToTitle}:</b>
                    <div>{billTo}</div>
                </div>
            </Col>
            <Col lg={5} className="invoice-info">
                <div>
                    <b>Invoice Number:</b> {invoiceNum}
                </div>
                <div>
                    <b>{dateTitle}:</b> {date}
                </div>
                <div>
                    <b>{dueDateTitle}:</b> {dueDate}
                </div>
            </Col>
        </Row>

        <Row className="info-row">
            <Col lg={5}>
                <div className="address-info">
                    <b>{addressTitle}:</b>
                    <div>{address}</div>
                </div>
            </Col>
            <Col lg={5} className="po-info">
                <div>
                    <b>{poTitle}:</b> {poNumber}
                </div>
                <div>
                    <b>{paymentTitle}:</b> {paymentTerms}
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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.rate}</td>
                            <td>{item.quantity}</td>
                            <td>{currency}{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>

        <div className="dotted-line"></div>

        <Row className="footer-row">
            <Col lg={5} className="notes-col">
                <div>
                    <b>{noteTitle}:</b>
                    <p>{note}</p>
                </div>
                <div>
                    <b className="footer-title">{termsTitle}:</b>
                    <p className="footer-content">{terms}</p>
                </div>
            </Col>

            <Col lg={5} className="summary-col">
                <div className="mb-2">
                    <b>{subTotalTitle}:</b> {currency}{subTotal}
                </div>
                {isDiscount === 1 && (
                    <div className="my-2">
                        <b>{discountTitle}:</b> {currency}{discountAmount}
                    </div>
                )}
                {isShipping === 1 && (
                    <div className="my-2">
                        <b>{taxTitle}:</b> {currency}{taxAmount}
                    </div>
                )}
                {isTax === 1 && (
                    <div className="my-2">
                        <b>{shippingTitle}:</b> {currency}{shippingAmount}
                    </div>
                )}
                <div className="my-2">
                    <b>{amountPaidTitle}:</b> {currency}{amountPaid}
                </div>
                <div className="my-2">
                    <b>{balanceDueTitle}:</b> {currency}{balance}
                </div>
                <div className="mt-2">
                    <b>{totalTitle}:</b> {currency}{total}
                </div>
            </Col>
        </Row>
    </Container>
    )
}
export default StateDownloadPage