import axios from 'axios'

const SERVICE_URL = process.env.REACT_APP_SERVICE_URL || 'http://localhost:8080'
const NO_UPLOADID = { message: 'No upload ID given by the server' }
const REFUSED = { message: 'Refused by the server' }

export const readData = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${SERVICE_URL}/data`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export const uploadNameAndHeight = (name, height) => {
  const config = {
    headers: { 'cache-control': 'no-cache' }
  }
  return new Promise((resolve, reject) => {
    axios.post(`${SERVICE_URL}/submit`, { name, height }, config)
      .then(response => response.data.uploadId ? resolve(response.data.uploadId) : reject(NO_UPLOADID))
      .catch(err => reject(err))
  })
}

export const uploadFiles = (uploadId, files) => {
  return new Promise((resolve, reject) => {
    if (!files) resolve()
    if (files.length === 0) resolve()

    const formData = new FormData()
    formData.append('file', files[0])
    axios.post(`${SERVICE_URL}/upload/${uploadId}`, formData)
      .then(response => response.data.result ? resolve() : reject(REFUSED))
      .catch(err => reject(err))
  })
}


