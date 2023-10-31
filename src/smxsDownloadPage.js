import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiSolidDownload } from 'react-icons/bi';

const DownloadPage = ({
    handleCustomInputs,
    handleDownload,
    state,
    handleNavigation
}) => {
    return (<Row className='outer-content-colxs'>
        <Col sm={12} xs={12} className="m-0 d-flex justify-content-center">
            <label htmlFor="currency">Currency</label>
        </Col>
        <Col sm={12} xs={12} className="d-flex justify-content-center my-2 ">
            <select id="currency" className="my-0 text-center" onChange={(event) => handleCustomInputs('currency', event.target.value)}>
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
        </Col>
        <Col sm={12} xs={12} className="my-1 d-flex justify-content-center">
            <button
                style={{ opacity: state.total > 0 ? 1 : 0.5 }}
                disabled={state.total <= 0}
                onClick={() => handleDownload({ userSalesId: null, page: 'homepage' })}
            >
                <BiSolidDownload /> Download Invoice
            </button>
        </Col>

        <Col sm={12} xs={12} className="my-1 d-flex justify-content-center">
            <button onClick={() => handleNavigation('/records')}>View Records</button>
        </Col>
    </Row>)
}
export default DownloadPage