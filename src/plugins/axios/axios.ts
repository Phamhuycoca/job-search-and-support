import axios from 'axios'
import { config } from 'dotenv'
config();
const BASE_URL = process.env.VUE_APP_API_URL

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false
})
