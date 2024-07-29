import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL of your Flask backend
  timeout: 1000,
});

export default instance;
