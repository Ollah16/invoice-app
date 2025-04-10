import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomDataPage from "../../customInputPage";
import TermAndCondPage from "../../termCondtions";
import InvoiceItemsTable from "./InvoiceItemsTable";
import DownloadBtnPage from "../../downloadSection";
import DateTermsPage from "../../datePage";
import InvInfo from "../../invoiceInformation";
import InvoiceEntry from "../../invoiceEntry";
import ImageComp from "./imageComp";

const InvoicePage = () => {

    return (<Row className='justify-content-between largeScreen'>

        <Col lg={10} md={12} className="inner-content-col">
            <Col lg={12} md={12} className='d-flex justify-content-between align-items-center'>

                <ImageComp />
                <InvoiceEntry />

            </Col>

            <Col lg={12} md={12} className='d-flex justify-content-between gapInclude'>

                <InvInfo />

                <DateTermsPage />
            </Col>

            <InvoiceItemsTable />

            <Row className="justify-content-between">

                <TermAndCondPage />

                <CustomDataPage />
            </Row>
        </Col>

        <Col className="downloadSection">
            <DownloadBtnPage />
        </Col>
    </Row >)
}
export default InvoicePage