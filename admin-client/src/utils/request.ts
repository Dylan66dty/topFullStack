import axios from 'axios'

let baseURL;


if (process.env.NODE_ENV === 'development') {
  baseURL = '/dev'
}


const http = axios.create({
  baseURL
})

export default http