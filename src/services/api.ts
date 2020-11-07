import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pimpos-56cd3.firebaseio.com',
  timeout: 10000,
});

export default api;
