import { SUBMIT_FORM_SUCCESS, SUBMIT_FORM_ERROR } from './actions'
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actions'

export const submitReducer = (state, action) => {
  if (typeof state === 'undefined') {
    state = {}
  }

  if (action.type === SUBMIT_FORM_SUCCESS) {
    return { ...state, success: true, data: action.payload }
  } else if (action.type === SUBMIT_FORM_ERROR) {
    return { ...state, success: false, error: action.payload.message }
  } else {
    return state 
  }
}

export const dataReducer = (state, action) => {
  if (typeof state === 'undefined') {
    state = {}
  }

  if (action.type === FETCH_DATA_SUCCESS) {
    return { ...state, success: true, data: action.payload }
  } else if (action.type === FETCH_DATA_ERROR) {
    return { ...state, success: false, error: action.payload.message }
  } else {
    return state 
  }
}