import React from 'react'

const InputField = ({input, type, meta: {error, touched}}) => {
  const errorText = touched && error && <div className="input-field--error">{error}</div>

  return (
    <div className="input-field">
      <label>{capitalize(input.name)}</label>
      <input {...input} autoComplete="off" type={type}/>
      {errorText}
    </div>
  )
}

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export default InputField
