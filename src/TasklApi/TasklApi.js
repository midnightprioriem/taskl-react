import axios from 'axios';

const apiUrl = '';

let TasklApiKit = axios.create({
        baseUrl: apiUrl,
        timeout: 5000,
});

export const setClientToken = token => {
        TasklApiKit.interceptors.request.use(function (config) {
                config.headers.Authorization = `Token ${token}`;
                return config;
        });
};

export default TasklApiKit;

