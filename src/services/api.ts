import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw-proffy-backend.herokuapp.com/',
});

export default api;