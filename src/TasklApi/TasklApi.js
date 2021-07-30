import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const apiUrl = 'http://127.0.0.1:8000/';
const loginUrl = 'dj-rest-auth/login/';

const api = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
});

let TasklApiKit = {
    hasToken: false,
    apiInterceptor: null,
    setClientToken(token) {
        this.hasToken = true;
        this.apiInterceptor = api.interceptors.request.use(function(config) {
            config.headers.Authorization = `Token ${token}`;
            return config;
        })
    },
    removeClientToken() {
        this.hasToken = false;
        api.interceptors.request.eject(this.apiInterceptor);
        this.apiInterceptor = null;
    },
    async loginRequest(username, password) {
        console.log("Login Request");
        try {
            const response = await api.post(loginUrl, {
                username: username,
                password: password,
            });
            if (response.status === StatusCodes.OK) {
                this.setClientToken(response.key);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error)
        }
    }

};

export default TasklApiKit;