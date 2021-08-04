import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const apiUrl = 'http://127.0.0.1:8000/';
const loginUrl = 'dj-rest-auth/login/';
const registrationUrl = "dj-rest-auth/registration/";

const api = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
});

let TasklApiKit = {
    hasToken: false,

    apiInterceptor: null,

    setClientToken(token) {
        this.hasToken = true;
        this.apiInterceptor = api.interceptors.request.use(function (config) {
            config.headers.Authorization = `Token ${token}`;
            return config;
        })
    },

    removeClientToken() {
        this.hasToken = false;
        api.interceptors.request.eject(this.apiInterceptor);
        this.apiInterceptor = null;
    },

    async registerUser(username, email, password1, password2) {
        console.log("User registration");
        try {
            const response = await api.post(registrationUrl, {
                'username': username,
                'email': email,
                'password1': password1,
                'password2': password2,
            });
            console.log(response.status);
            console.log(response.request);
            if (response.status === StatusCodes.CREATED) {
                return {
                    success: true,
                    data: null,
                };
            } else {
                return {
                    success: false,
                    data: null,
                };
            }
        } catch (error) {
            console.log(error);
            return {
                success: false,
                error: error?.message,
                data: error?.response?.data,
            };
        }
    },

    async loginRequest(username, password) {
        console.log("Login Request");
        try {
            const response = await api.post(loginUrl, {
                'username': username,
                'password': password,
            });
            if (response.status === StatusCodes.OK) {
                // @ts-ignore
                this.setClientToken(response.key);
                return {
                    success: true,
                    data: null,
                };
            } else {
                console.log(response);
                return {
                    success: false,
                    data: null,
                };
            }
        } catch (error) {
            console.log(error);
            return {
                success: false,
                data: error.message,
            }
        }
    }

};

export default TasklApiKit;