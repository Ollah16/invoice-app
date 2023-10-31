import React from 'react'
import { Col } from "react-bootstrap";
const TermAndCondPage = ({
    handleCustomInputs,
    state
}) => {

    let { termsTitle, noteTitle, terms, note, } = state
    return (
        <Col lg={6} md={6} className='notesTerms-col'>
            <div className='customInput'>
                <input value={noteTitle} onInput={(event) => handleCustomInputs('note_title', event.target.value)} />
            </div>
            <div className='normInput'>
                <input
                    id='notes'
                    value={note}
                    onInput={(event) => handleCustomInputs('note', event.target.value)}
                    type="text"
                    placeholder="Notes- relevant information" />
            </div>
            <div className='customInput'>
                <input value={termsTitle} onInput={(event) => handleCustomInputs('terms_title', event.target.value)} />
            </div>
            <div className='normInput'>
                <input
                    id='terms'
                    value={terms}
                    onInput={(event) => handleCustomInputs('terms', event.target.value)}
                    placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
            </div>
        </Col>)
}
export default TermAndCondPage