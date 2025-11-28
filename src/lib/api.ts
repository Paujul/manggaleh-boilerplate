import axios from 'axios'

import { API_BASE_URL } from '@/constants/env'

export default axios.create({
  baseURL: API_BASE_URL,
  // headers: {
  //   ... your options
  // },
})
