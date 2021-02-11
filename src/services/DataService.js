const SERVICE_URL = process.env.REACT_APP_SERVICE_URL || 'http://localhost:8080'

class DataService {

  getData = () => {
    return new Promise((resolve, reject) => {
      fetch(`${SERVICE_URL}/data`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  uploadNameAndHeight = (name, height) => {
    const config = {
      method: 'POST',
      headers: { 'cache-control': 'no-cache', 'content-type': 'application/json' },
      body: JSON.stringify({ name, height })
    }
    return new Promise((resolve, reject) => {
      fetch(`${SERVICE_URL}/submit`, config)
        .then(response => response.json())
        .then(data => resolve(data.uploadId))
        .catch(err => reject(err))
    })
  }

  uploadFiles = (uploadId, files) => {
    return new Promise((resolve, reject) => {
      if (files.length === 0) resolve()

      const formData = new FormData()
      formData.append('file', files[0])
      const config = {
        method: 'POST',
        body: formData
      }
      fetch(`${SERVICE_URL}/${uploadId}`, config)
        .then(response => resolve())
        .catch(err => reject(err))
    })
  }
}

export default DataService