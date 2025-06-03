import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    transformRequest: function (data, headers) {
        const access_token = JSON.parse(sessionStorage.getItem('token'));
        if (access_token) {
            headers.Authorization = "Bearer " + access_token;
        }

        headers['Content-Type'] = 'application/json';

        if (data instanceof FormData) {
            return data; // Do not transform FormData
        }

        if (data && typeof data === 'object') {
            return JSON.stringify(data);
        }
        return data;
    },
});

export default axiosInstance;