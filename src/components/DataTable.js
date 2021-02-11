import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getData } from '../redux/actions'

const INTERVAL = process.env.REACT_APP_REFRESH_INTERVAL || 10000

const DataTable = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getData())
    const interval = setInterval(() => dispatch(getData()), INTERVAL)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Table = ({ data }) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
      { 
        data.sort((a, b) => a.name.localeCompare(b.name))
          .map((item, i) => <tr key={`${item.name}-${item.height}-${i}`}>
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.file}</td>
          </tr>)     
      }
      </tbody>
    </table>
  )

  return data?.success ? <Table data={data.data} /> : <div>{data.error}</div>    
}

export default DataTable