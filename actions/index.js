import httpInstance from './axios'
const http = httpInstance()

export const signup = data => http.post('/user/signup', data)
