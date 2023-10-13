import React from 'react'
import { Col } from "react-bootstrap";
const TermAndCondPage = ({ handleCustomInputs, state }) => {
    return (
        <Col lg={6} md={6} className='notesTerms-col'>
            <div className='customInput'>
                <input value={state.note_title} onInput={(event) => handleCustomInputs('note-title', event.target.value)} />
            </div>
            <div className='normInput'>
                <input
                    id='notes'
                    value={state.note}
                    onInput={(event) => handleCustomInputs('note', event.target.value)}
                    type="text"
                    placeholder="Notes- relevant information" />
            </div>
            <div className='customInput'>
                <input value={state.terms_title} onInput={(event) => handleCustomInputs('terms-title', event.target.value)} />
            </div>
            <div className='normInput'>
                <input
                    id='terms'
                    value={state.terms}
                    onInput={(event) => handleCustomInputs('terms', event.target.value)}
                    placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
            </div>
        </Col>)
}
export default TermAndCondPage