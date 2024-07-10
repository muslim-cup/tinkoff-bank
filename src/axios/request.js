import axios from 'axios'
import router from '../router/index'
const requestAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_FB_URL
})

requestAxios.interceptors.response.use( null, error => {
  if(error.response.status === 401) {
    router.push('/auth?message=auth')
  }
  return Promise.reject(error);
});
export default requestAxios