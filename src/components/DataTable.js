import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getData } from '../redux/actions'

const DataTable = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>Data {JSON.stringify(data)}</div>
}

export default DataTable