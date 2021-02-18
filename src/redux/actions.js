import DataService from '../services/DataService'

export const SUBMIT_FORM_REQUEST = 'SUBMIT_FORM_REQUEST'
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS'
export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR'
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_REQUEST })
  const service = new DataService()
  return service.getData()
    .then(data => dispatch({ type: FETCH_DATA_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: FETCH_DATA_ERROR, payload: err }))
}

export const submitForm = (data) => dispatch => {
  dispatch({ type: SUBMIT_FORM_REQUEST, payload: data })
  const service = new DataService()
  return service.uploadNameAndHeight(data.name, data.height)
    .then(uploadId => service.uploadFiles(uploadId, data.file))
    .then(() => {
      dispatch({ type: SUBMIT_FORM_SUCCESS, payload: data })
      dispatch(getData())})
    .catch(err => dispatch({ type: SUBMIT_FORM_ERROR, payload: err }))
}