import axios from 'axios';

const api = axios.create({
    baseURL: 'https://crud-todolist.herokuapp.com',
});

export default api;