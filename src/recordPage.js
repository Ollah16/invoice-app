import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Navbar, Row, Table } from 'react-bootstrap'
import { MdOutlineArrowBack } from 'react-icons/md'

const RecordPage = ({
    handleDownload,
    state,
    handleNavigation
}) => {

    let [saleRecords, setSaleRecords] = useState('')
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const handleFetchRecords = async () => {
            if (state.isLogged) {
                try {
                    // const response = await axios.get('http://localhost:9080/invoice/fetchrecords',
                    const response = await axios.get('https://invoice-back-end.vercel.app/invoice/fetchrecords',
                        {
                            headers: { 'Authorization': `Bearer ${accessToken}` }
                        })
                    let { saleRecords } = response.data

                    const a = saleRecords.sort((a, b) => {
                        const dateA = new Date(a.date)
                        const dateB = new Date(b.date)
                        return dateB - dateA
                    })
                    setSaleRecords(a)
                }
                catch (err) { console.error(err) }
            }
        }

        handleFetchRecords()

    }, [])

    return (<Container className='invoice-homepage' fluid>
        <Navbar>
            <Container>
                <Col lg={4} >
                    <Navbar.Brand href="#home" className='text-white'>Invoice Generator</Navbar.Brand>
                </Col>
            </Container>
        </Navbar>
        <Row>
            <Col lg={2} md={2} sm={4} xs={4} className='return-col'>
                <button onClick={() => handleNavigation('/')}> <MdOutlineArrowBack /><span>Back</span></button>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            {saleRecords.length > 0 ?
                <Col lg={8} md={8} xs={8} sm={8} className='table-responsive'>
                    {saleRecords.map((record, index) => (
                        <Table bordered key={index} className='text-center'>
                            <thead>
                                <tr>
                                    <th>{record.dateTitle}</th>
                                    <th>{record.billToTitle}</th>
                                    <th>{record.totalTitle}</th>
                                    <th>{record.amountPaidTitle}</th>
                                    <th>{record.balanceDueTitle}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{record.date}</td>
                                    <td>{record.billTo}</td>
                                    <td>{record.total}</td>
                                    <td>{record.amountPaid}</td>
                                    <td>{record.balance}</td>
                                    <td><button className='download-button' onClick={() => handleDownload({ userSalesId: record.userSalesId, page: 'records' })}>Download</button></td>
                                </tr>
                            </tbody>
                        </Table>))}
                </Col> : state.isLogged ?
                    <Col lg={6} md={8} xs={10} sm={10}>
                        <h4 className='text-center'>No Records Available</h4>
                    </Col> : null}
        </Row>

        <Row className='justify-content-center'>
            {!state.isLogged && <Col lg={6} md={8} xs={10} sm={10} className='bg-white py-5 my-5'>
                <div className='record-signup-div'>User not signed in, <button onClick={() => handleNavigation(`/authenticate/${'records'}`)}> Sign In</button></div>
            </Col>}
        </Row>

        <footer className='footer-container'>
            < Row className="invoice-footer" >
                <Col lg={12} className="text-center">
                    <p>&copy; {new Date().getFullYear()} Invoice Generator. All Rights Reserved.</p>
                </Col>
            </Row >
        </footer>
    </Container >)
}
export default RecordPage