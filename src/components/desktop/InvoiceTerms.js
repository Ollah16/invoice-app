import React from 'react'
import { Col } from "react-bootstrap";
import { useAppContext } from '../../context/AppContext';
import InputField from '../common/InputField';

const InvoiceTerms = () => {

    const { state: { termsTitle, noteTitle, terms, note, }, handleCustomInputs } = useAppContext();

    return (
        <Col lg={7} md={7} className='notesTerms-col'>
            <div className='customInput'>
                <InputField
                    aria-label='Note Title'
                    type="text"
                    value={noteTitle}
                    onChange={(value) => handleCustomInputs('NOTE_TITLE', value)} />
            </div>
            <div className='normInput'>
                <InputField
                    value={note}
                    onChange={(value) => handleCustomInputs('NOTE', value)}
                    aria-label='Note'
                    type="text"
                    placeholder="Notes- relevant information" />
            </div>
            <div className='customInput'>
                <InputField
                    aria-label='Terms Title'
                    type='text'
                    value={termsTitle}
                    onChange={(value) => handleCustomInputs('TERMS_TITLE', value)} />
            </div>
            <div className='normInput'>
                <InputField
                    value={terms}
                    aria-label='Terms'
                    type='text'
                    onChange={(value) => handleCustomInputs('TERMS', value)}
                    placeholder="Terms & conditions-late fees, payment method, delivery schedule" />
            </div>
        </Col>)
}
export default InvoiceTerms