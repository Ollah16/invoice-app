import React from 'react'

const InputField = ({ type, onChange, value, placeholder, ariaLabel, className, id }) => {
    return (
        <input
            onChange={(e) => onChange(e.target.value)}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            aria-label={ariaLabel}
            className={className}
        />
    )
}

export default InputField