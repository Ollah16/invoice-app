import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
const FooterPage = () => {

    const [footerLi, setFooter] = useState({
        'USE INVOICE GENERATOR': [
            'Invoice Template',
            'How to Use',
            'Sign In',
            'Sign Up',
            'Release Notes',
            'Developer API'],
        'EDUCATION': ['Invoicing Guide'],
        [`@ ${new Date().getFullYear()} Invoice System`]: ['Terms of Use']
    })

    return (
        <footer className='footer-container'>
            < Row className="invoice-footer align-items-center" >
                <Col lg={12} className="py-2 footerWrapper">
                    {Object.entries(footerLi).map(([foot, footLi]) => (
                        <ul key={foot}>
                            <li>{foot}</li>
                            {footLi.map((foo, ind) => (
                                <li key={ind}><span>{foo}</span></li>
                            ))}
                        </ul>
                    ))}
                </Col>
            </Row >
        </footer>)
}
export default FooterPage