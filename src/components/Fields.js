import React from 'react'

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className='error'>{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </div>
  </div>
)

export const fileField = ({
  input,
  label,
  meta: { touched, error, warning }
}) => {
  delete input.value; 
  return (
    <div>
      <label>{label}</label>
      <div>
        <input type="file" {...input} />
        {touched &&
        ((error && <span className='error'>{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
      </div>
    </div>
  )
}
