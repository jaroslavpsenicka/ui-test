import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { required, maxLength, minValue, maxValue } from './Validators'
import { renderField, fileField } from './Fields'
import DataService from '../services/DataService'

const maxLength100 = maxLength(100)
const minValue0 = minValue(0)
const maxValue500 = maxValue(500)

const formSubmit = (data, submitOK) => {
  console.log('submit', data)
  const service = new DataService()
  return service.uploadNameAndHeight(data.name, data.height)
    .then(uploadId => service.uploadFiles(uploadId, data.file[0]))
    .then(() => submitOK())
    .catch(err => {
      throw new SubmissionError({ _error: err.message })
    })
}

const UploadForm = ({ handleSubmit, submitting, error, onSubmit }) => {

  return (
    <form onSubmit={handleSubmit((data) => formSubmit(data, onSubmit))}>
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
      {error && <div>{error}</div>}
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "upload",
})(UploadForm);
