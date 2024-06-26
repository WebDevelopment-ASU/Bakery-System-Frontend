import axios from 'axios';

const httpClient = axios.create({
    // baseURL: 'https://bakery-system-backend.onrender.com/api',
    baseURL: 'http://localhost:3001/api',
});

httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default httpClient;
