import React from 'react'

import { useDispatch } from 'react-redux'
import { submit } from 'redux-form'

const SubmitButton = () => {

  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(submit('upload'))}>Submit</button>
  )
}

export default SubmitButton

