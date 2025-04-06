import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173', // Replace with your API base URL
  withCredentials: true,
});
export default axiosInstance;