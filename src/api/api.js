import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

export const routes = {
    register: '/register',
    login: '/login'
};

export const aGet = route => axios.get(baseUrl + route);
export const aPost = (route, data) => axios.post(baseUrl + route, data);