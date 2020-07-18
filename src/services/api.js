import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async config => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTU5NTAzMzYwOX0.4gU9uUYu_15r0UgyHMce0YUeuDxkWpqEzhVXoLnkVAc";  //getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;