import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BiSolidDownload } from 'react-icons/bi';

const DownloadBtnPage = ({
    handleCustomInputs,
    handleDownload,
    handleNavigation,
    proceedDownload }) => {

    return (<Row className='outer-content-col'>
        <Col lg={10} md={10}>
            <Row className="justify-content-center my-2">
                <button
                    style={{ opacity: proceedDownload ? 1 : 0.5 }}
                    disabled={!proceedDownload}
                    onClick={() => handleDownload({ userSalesId: null, page: 'homepage' })}
                >
                    <BiSolidDownload /> Download Invoice
                </button>
            </Row>

            <Row className="justify-content-center m-0">
                <label htmlFor="currency">Currency</label>
            </Row>

            <Row className="justify-content-center m-0 ">
                <select id="currency" className="my-0" onChange={(event) => handleCustomInputs('currency', event.target.value)}>
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

            <Row className="justify-content-center my-5">
                <button onClick={() => handleNavigation('/records')}>View Records</button>
            </Row>

        </Col>
    </Row>)
}
export default DownloadBtnPage