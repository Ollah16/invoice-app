import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import html2pdf from 'html2pdf.js'

const DownloadPage = ({ state }) => {
    let downloadPage = useRef()
    const navigate = useNavigate()
    useEffect(() => {
        const downPage = () => {
            const pageId = downloadPage.current
            const opt = {
                margin: [0, 0, 0, 0],
                filename: 'invoice.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 5 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(pageId).save();
        }
        downPage();
        navigate('/')
    }, [])

    return (<>{state.invoice.map((data, index) => (
        <Container key={index} className="invoice-container" ref={downloadPage}>
            <Row className="header-row">
                <Col className="text-center logo-col">
                    {/* <img src={`./assets/imgs/${data.logo}`} alt="Company Logo" className="logo" /> */}
                </Col>
                <Col><strong className="info-title">{data.whoisFrom}</strong></Col>
            </Row>
            <Row className="info-row mt-4">
                <Col xs={6} className="sender-info">
                    <strong className="info-subtitle">{data.billTo_title}:</strong>
                    <address className="info-content">{data.billTo}</address>
                </Col>
                <Col xs={6} className="invoice-info text-right">
                    <div><strong>Invoice Number:</strong> {data.invoiceNum}</div>
                    <div><strong>{data.date_title}:</strong> {data.date}</div>
                    <div><strong>{data.due_Date_title}:</strong> {data.dueDate}</div>
                </Col>
            </Row>

            <Row className="additional-info-row mt-3">
                <Col xs={6} className="address-info">
                    <div><strong>{data.address_title}:</strong></div>
                    <address>{data.address}</address>
                </Col>
                <Col xs={6} className="po-info text-right">
                    <div><strong>{data.po_title}:</strong> {data.poNumber}</div>
                    <div><strong>{data.payment_title}:</strong> {data.paymentTerms}</div>
                </Col>
            </Row>

            <hr className="divider mt-4" />

            <Table striped bordered className="items-table mt-4">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((item, index) => (<tr key={index}>
                        <td>{item.description}</td>
                        <td>{item.quantity}</td>
                        <td>{data.currency}{item.rate}</td>
                        <td>{data.currency}{item.amount}</td>
                    </tr>))}
                </tbody>
            </Table>

            <hr className="divider mt-4" />

            <Row className="footer-row mt-4 justify-content-between align-items-center">
                <Col xs={12} md={4} className="notes-col">
                    <div>
                        <strong className="footer-title">{data.note_title}:</strong>
                        <p className="footer-content">{data.note}</p>
                    </div>
                    <div>
                        <strong className="footer-title">{data.terms_title}:</strong>
                        <p className="footer-content">{data.terms}</p>
                    </div>
                </Col>

                <Col xs={12} md={4} className="summary-col text-right">
                    <strong>{data.subtotal_title}:</strong> {data.currency}{data.subTotal}<br />
                    {data.isDiscount && <><strong>{data.discount_title}:</strong> {data.currency}{data.discount}<br /></>}
                    {data.isShipping && <><strong>{data.tax_title}:</strong> {data.currency}{data.tax}<br /></>}
                    {data.isTax && <><strong>{data.shipping_title}:</strong> {data.currency}{data.ship}<br /></>}
                    <strong>{data.amountpaid_title}:</strong> {data.currency}{data.amountPaid}<br />
                    <strong>{data.balancedue_title}:</strong> {data.currency}{data.balance}<br />
                    <strong>{data.total_title}:</strong> {data.currency}{data.total}
                </Col>
            </Row>
        </Container>
    ))}
    </>);
}
export default DownloadPage;