import React from 'react'
import { Col } from "react-bootstrap";
import { useAppContext } from './context/AppContext';
import InputField from './components/common/InputField';

const TermAndCondPage = () => {

    const { state: { termsTitle, noteTitle, terms, note, }, handleCustomInputs } = useAppContext();

    return (
        <Col lg={7} md={7} className='notesTerms-col'>
            <div className='customInput'>
                <InputField value={noteTitle} onChange={(event) => handleCustomInputs('NOTE_TITLE', event.target.value)} />
            </div>
            <div className='normInput'>
                <InputField
                    value={note}
                    onChange={(event) => handleCustomInputs('NOTE', event.target.value)}
                    type="text"
                    placeholder="Notes- relevant information" />
            </div>
            <div className='customInput'>
                <InputField value={termsTitle} onChange={(event) => handleCustomInputs('TERMS_TITLE', event.target.value)} />
            </div>
            <div className='normInput'>
                <InputField
                    value={terms}
                    onChange={(event) => handleCustomInputs('TERMS', event.target.value)}
                    placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
            </div>
        </Col>)
}
export default TermAndCondPage