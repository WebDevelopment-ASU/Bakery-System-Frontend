import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://bakery-system-backend.onrender.com/api',
});

httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default httpClient;
