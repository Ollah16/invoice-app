import React from 'react'

const InputField = ({ type, onChange, value, placeholder, ariaLabel, className }) => {
    return (
        <input
            onChange={onChange}
            type={type}
            value={value}
            placeholder={placeholder}
            ariaLabel={ariaLabel}
            className={className}
        />
    )
}

export default InputField