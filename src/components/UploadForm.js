import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from 'react-redux'

import { submitForm } from '../redux/actions'
import { required, maxLength, minValue, maxValue } from './Validators'
import { renderField, fileField } from './Fields'

const maxLength100 = maxLength(100)
const minValue0 = minValue(0)
const maxValue500 = maxValue(500)

const UploadForm = ({ handleSubmit, error }) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        label="Name"
        component={renderField}
        validate={[required, maxLength100]}
      />
      <Field
        name="height"
        type="number"
        label="Height"
        parse={Number}
        component={renderField}
        validate={[required, minValue0, maxValue500]}
      />
      <Field
        name="file"
        type="file"
        label="File"
        component={fileField}
      />
      { error && <div>{error}</div> }
    </form>
  );
};

const submit = (data, dispatch) => {
  dispatch(submitForm(data)) 
}

export default connect()(reduxForm({
  form: "upload", 
  onSubmit: submit
})(UploadForm));
