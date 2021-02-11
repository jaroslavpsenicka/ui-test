import Axios from 'axios';

const SERVICE_URL = process.env.REACT_APP_SERVICE_URL || 'http://localhost:8080'

class DataService {

  getData = () => {
    return new Promise((resolve, reject) => {
      Axios.get(`${SERVICE_URL}/data`)
        .then(response => resolve(response.data))
        .catch(err => reject(err))
    })
  }

  uploadNameAndHeight = (name, height) => {
    const config = { headers: { 'cache-control': 'no-cache', 'Access-Control-Request-Headers': '' }}
    return new Promise((resolve, reject) => {
      Axios.post(`${SERVICE_URL}/submit`, { name, height }, config)
        .then(response => resolve(response.uploadId))
        .catch(err => reject(err))
    })
  }

  uploadFiles = (uploadId, files) => {
    return new Promise((resolve, reject) => {
      if (files.length === 0) resolve()

      const formData = new FormData()
      formData.append('file', files[0])
      const config = { headers: { 'content-type': 'multipart/form-data' }}
      Axios.post(`${SERVICE_URL}/${uploadId}`, formData, config)
        .then(response => resolve())
        .catch(err => reject(err))
    })
  }
}

export default DataService