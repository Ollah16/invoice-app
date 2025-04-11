import React from "react";
import { Col } from "react-bootstrap";
import InvoiceCharges from "../InvoiceCharges";
import InvoiceSubTotal from "./InvoiceSubTotal";
import InvoiceTotal from "./InvoiceTotal";


const InvoiceSummary = () => {

    return (
        <Col lg={5} md={5} className="pb-3">
            <InvoiceSubTotal />

            <InvoiceCharges />

            <InvoiceTotal />
        </Col >)
}
export default InvoiceSummary