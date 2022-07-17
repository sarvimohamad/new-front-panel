import axios from 'axios'
const headers = {}
if (localStorage.getItem('token')) {
  headers.Authorization = 'Bearer ' + localStorage.getItem('token')
}
console.log(process.env)
export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: headers
})
