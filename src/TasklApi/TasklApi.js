import axios from 'axios';

const apiUrl = '';

let TasklApiKit = {
    api: axios.create({
        baseUrl: apiUrl,
        timeout: 5000,
    }),
    hasToken: false,
    apiInterceptor: null,
    setClientToken(token) {
        this.hasToken = true;
        this.apiInterceptor = this.api.interceptors.request.use(function(config) {
            config.headers.Authorization = `Token ${token}`;
            return config;
        })
    },
    removeClientToken() {
        this.hasToken = false;
        this.api.interceptors.request.eject(this.apiInterceptor);
        this.apiInterceptor = null;
    }

};

export default TasklApiKit;