import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import Button from "../common/Button";
import { IoMdAdd } from "react-icons/io";
import MobileItemsTable from "../mobile/MobileItemsTable";
import DesktopItemsTable from "./DesktopItemsTable";

const InvoiceItemsTable = () => {

    const { handleAddRow } = useAppContext();

    return (
        <Col lg={12} md={12} className="my-2">

            <MobileItemsTable />
            <DesktopItemsTable />

            <Col className='line-col text-start'>
                <Button onClick={handleAddRow} className="d-flex align-items-center">
                    <span><IoMdAdd size={15} /></span> <span>Line Item</span>
                </Button>
            </Col>

        </Col >
    )
}
export default InvoiceItemsTable