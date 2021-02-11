import React from 'react'

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span class='error'>{error}</span>) ||
          (warning && <span class="warning">{warning}</span>))}
    </div>
  </div>
)

export const fileField = (field) => {
  delete field.input.value; 
  return <input type="file" {...field.input} />;
}
