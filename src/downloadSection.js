import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BiSolidDownload } from 'react-icons/bi';

const DownloadBtnPage = ({
    handleCustomInputs,
    handleDownload,
    handleNavigation,
    proceedDownload }) => {

    return (<Row className='outer-content-col p-0 mx-auto me-auto'>
        <Col lg={10} md={12} sm={12} xs={12} className='p-0'>
            <Row className="justify-content-center my-2 downloadBtnWrapper">
                <button
                    style={{ opacity: proceedDownload ? 1 : 0.5 }}
                    disabled={!proceedDownload}
                    onClick={() => handleDownload({ userSalesId: null, page: 'homepage' })}
                >
                    <BiSolidDownload /> Download Invoice
                </button>
            </Row>

            <Row className="mt-2 mb-0 labelWrapper">
                <label htmlFor="currency">Currency</label>
            </Row>

            <Row className="mb-2 mt-0 currencyWrapper">
                <select id="currency" className="my-0" onChange={(event) => handleCustomInputs('CURRENCY', event.target.value)}>
                    <option value="US$">USD ($)</option>
                    <option value="GB£">GBP (£)</option>
                    <option value="EU€">EUR (€)</option>
                    <option value="JP¥">JPY (¥)</option>
                    <option value="CN¥">CNY (¥)</option>
                    <option value="IN₹">INR (₹)</option>
                    <option value="RU₽">RUB (₽)</option>
                    <option value="AU$">AUD ($)</option>
                    <option value="CA$">CAD ($)</option>
                    <option value="SG$">SGD ($)</option>
                    <option value="CH₣">CHF (₣)</option>
                </select>
            </Row>

            <Row className="justify-content-center my-2 recordBtnWrapper">
                <button onClick={() => handleNavigation('/records')}>History</button>
            </Row>

        </Col>
    </Row>)
}
export default DownloadBtnPage