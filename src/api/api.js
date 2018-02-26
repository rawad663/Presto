import axios from 'axios';

const baseUrl = 'https://presto-core.herokuapp.com';

export const routes = {
    register: '/register/',
    login: '/login/'
};

export const aGet = route => axios.get(baseUrl + route);
export const aPost = (route, data) => axios.post(baseUrl + route, data);