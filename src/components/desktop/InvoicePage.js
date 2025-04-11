import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InvoiceSummary from "./InvoiceSummary/InvoiceSummary";
import InvoiceTerms from "./InvoiceTerms";
import InvoiceItemsTable from "./InvoiceItemsTable";
import DownloadBtnPage from "../../downloadSection";
import InvoiceDateDetails from "./InvoiceDateDetails";
import InvoiceContactSection from "./InvoiceContactSection";
import InvoiceMeta from "./InvoiceMeta";
import InvoiceLogoSection from "./InvoiceLogoSection";

const InvoicePage = () => {

    return (<Container fluid className="main d-flex flex-column">
        <Row className='justify-content-between p-5'>

            <Col lg={9} md={9} className="invoice-information-section">
                <Row className='d-flex justify-content-between align-items-center'>
                    <InvoiceLogoSection />
                    <InvoiceMeta />
                </Row>

                <Row className='justify-content-between gap-1'>
                    <InvoiceContactSection />
                    <InvoiceDateDetails />
                </Row>

                <InvoiceItemsTable />

                <Row className="justify-content-between">
                    <InvoiceTerms />
                    <InvoiceSummary />
                </Row>
            </Col>

            <Col lg={3} md={3} className="downloadSection">
                <DownloadBtnPage />
            </Col>
        </Row >
    </Container>)
}
export default InvoicePage