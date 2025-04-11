import React from 'react'
import { useAppContext } from '../../context/AppContext';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { RxCross2 } from 'react-icons/rx';

const DesktopItemsTable = () => {

    const { state: { data }, handleDataChange, handleDeleteRow } = useAppContext();
    const isDataLength = data.length > 1;

    return (
        <table className='border border-2 border-primary-subtle d-none d-md-block overflow-auto invoice-data-div py-2'>
            <thead className="text-center">
                <tr>
                    <th className='px-1'>#</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th className={`${isDataLength ? 'w-75' : 'w-100'} d-inline-block`}>Amount</th>
                    <th className={`${isDataLength ? 'w-25 d-inline-block' : 'd-none'}`}></th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ description, quantity, rate, amount }, index) =>
                (<tr key={index}>
                    <td className='px-1'>{index + 1}</td>
                    <td className='items-input-value'><InputField className="text-start" value={description} onChange={(value) => handleDataChange('DESCRIPTION', value, index)} placeholder='Item Description' /></td>
                    <td className='items-input-value'><InputField className="text-start" value={quantity} onChange={(value) => handleDataChange('QUANTITY', value, index)} placeholder='1' /></td>
                    <td className='items-input-value'><InputField className="text-start" value={rate} onChange={(value) => handleDataChange('RATE', value, index)} placeholder='0' /></td>
                    <td className={`${isDataLength ? 'w-75' : 'w-100'} d-inline-block`}><InputField className="border-0 w-100" value={amount?.toFixed(2)} disabled={true} /></td>

                    <td cla className='items-input-value' ssName={`${isDataLength ? 'w-25 d-inline-block' : 'd-none'}`}>
                        <Button className={`py-0 border-0 bg-transparent w-25`} onClick={() => handleDeleteRow(index)} >
                            <span><RxCross2 /></span>
                        </Button>
                    </td>

                </tr>))}
            </tbody>
        </table >
    )
}

export default DesktopItemsTable