import httpInstance from './axios'
const http = httpInstance()

export const signup = data => http.post('/user/signup', data)
export const upload = (data, token) =>
  http.post('/assets/upload', data, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'multipart/form-data'
    }
  })
