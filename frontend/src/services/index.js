import ax from 'axios';
import { baseURL } from './constants'

const api = new ax.create({
    baseURL,
})


export default api;