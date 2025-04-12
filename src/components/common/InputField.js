import React from 'react'
import { useAppContext } from '../../context/AppContext'

const InputField = ({ onChange = () => { }, className, fieldName = '', ...rest }) => {

    const { state: { error } } = useAppContext();

    const errorfield = error[fieldName.toLowerCase()];

    return (
        <div>
            <input
                onChange={(e) => onChange(e.target.value)}
                className={`${className} overflow-auto p-1`}
                {...rest}
            />
            {errorfield && (
                <span role='alert' className='form-error text-danger'>
                    {errorfield}
                </span>
            )}
        </div>
    )
}

export default InputField