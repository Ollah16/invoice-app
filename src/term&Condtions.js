import React from 'react'
import { Col } from "react-bootstrap";
const TermAndCondPage = ({
    handleCustomInputs,
    state
}) => {

    let { termsTitle, noteTitle, terms, note, } = state
    return (
        <Col lg={7} md={7} className='notesTerms-col'>
            <div className='customInput'>
                <input value={noteTitle} onInput={(event) => handleCustomInputs('NOTE_TITLE', event.target.value)} />
            </div>
            <div className='normInput'>
                <input
                    value={note}
                    onInput={(event) => handleCustomInputs('NOTE', event.target.value)}
                    type="text"
                    placeholder="Notes- relevant information" />
            </div>
            <div className='customInput'>
                <input value={termsTitle} onInput={(event) => handleCustomInputs('TERMS_TITLE', event.target.value)} />
            </div>
            <div className='normInput'>
                <input
                    value={terms}
                    onInput={(event) => handleCustomInputs('TERMS', event.target.value)}
                    placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
            </div>
        </Col>)
}
export default TermAndCondPage