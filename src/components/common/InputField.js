import React from 'react'

const InputField = ({ type, onChange, value, placeholder, ariaLabel, className, id }) => {
    return (
        <input
            onChange={onChange}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            ariaLabel={ariaLabel}
            className={className}
        />
    )
}

export default InputField