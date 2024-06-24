import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_DOMAIN,
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return error.response;
});

// Thêm một bộ đón chặn response
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return error.response;
});

export default instance;