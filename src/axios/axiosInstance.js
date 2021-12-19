import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'https://dummy.com';

export default axiosInstance;
