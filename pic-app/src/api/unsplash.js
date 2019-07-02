import axios from 'axios'
import config from '../config'

// --- NOTE: Create() will create a client instance with default values
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${config.UNSPLASH_ACCESS_TOKEN}`
    }
})

