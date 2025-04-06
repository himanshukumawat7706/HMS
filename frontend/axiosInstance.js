import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hms-l3jy.vercel.app', // Replace with your API base URL
  withCredentials: true,
});
export default axiosInstance;