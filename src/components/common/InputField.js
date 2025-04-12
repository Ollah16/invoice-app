import React from 'react'
import { useAppContext } from '../../context/AppContext'

const InputField = ({ type, onChange = () => { }, onBlur, value, placeholder, ariaLabel, className, id, fieldName = '' }) => {

    const { state: { error } } = useAppContext();

    const errorfield = error[fieldName.toLowerCase()];

    return (
        <div>
            <input
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                aria-label={fieldName.toLowerCase()}
                aria-invalid={!!errorfield}
                className={`${className} overflow-auto p-1`}
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