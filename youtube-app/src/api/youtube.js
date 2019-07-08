import axios from 'axios';

import config from '../config';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: config.YOUTUBE_API_KEY
    }
});