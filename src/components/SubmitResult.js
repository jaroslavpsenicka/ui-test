import React from 'react'

import { useSelector } from 'react-redux'

const SubmitResult = () => {

  const submitState = useSelector(state => state.submit)

  return (
    <div>{submitState?.success ? 'Submitted fine.' : submitState?.error}</div>
  )
}

export default SubmitResult

