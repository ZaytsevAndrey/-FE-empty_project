import axios from 'axios';

const instance = axios.create({ baseURL: process.env.API_BASE_URL || 'http://localhost:3000' });

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${ token }`;
    }
    return config;
});

export default instance;
