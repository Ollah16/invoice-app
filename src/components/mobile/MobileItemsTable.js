import React from 'react'
import { useAppContext } from '../../context/AppContext';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { RxCross2 } from 'react-icons/rx';
import { Col, Row } from 'react-bootstrap';

const MobileItemsTable = () => {

    const { state: { data, currency, }, handleDataChange, handleDeleteRow } = useAppContext();

    return (<Col sm={12} md={12} className='d-block d-md-none'>
        {data.map(({ amount, rate, quantity, description }, index) => (
            <table key={index} className='invoice-data-div w-100'>
                <thead>
                    <tr>
                        <th>
                            <span> Amount:</span><span>{`${currency}${amount.toFixed(2)}`}</span>
                        </th>
                        <th className='d-flex justify-content-end'>
                            {data.length > 1 &&
                                <Button className={`py-0 border-0 bg-transparent`} onClick={() => handleDeleteRow(index)} >
                                    <span><RxCross2 /></span>
                                </Button>}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='d-flex justify-content-start gap-2'>
                        <td>
                            <InputField className="text-start" value={rate} onChange={(value) => handleDataChange('RATE', value, index)} placeholder='0' />
                        </td>
                        <td>
                            <InputField className="text-start" value={quantity} onChange={(value) => handleDataChange('QUANTITY', value, index)} placeholder='1' />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <InputField className='w-100 text-start' value={description} onChange={(value) => handleDataChange('DESCRIPTION', value, index)} placeholder='Description of service or product' />
                        </td>
                    </tr>
                </tbody>
            </table>))
        }
    </Col >
    )
}

export default MobileItemsTable