import axios from 'axios';

const baseUrl = 'https://presto-core.herokuapp.com';

export const routes = {
    register: '/register/',
    login: '/login/',
    RSTReservation: '/reservation/'
};

export const aGet = route => axios.get(baseUrl + route);
export const aPost = (route, data) => axios.post(baseUrl + route, data);
export const aDelete = route => axios.delete(baseUrl + route);
export const aPut = (route, data) => axios.put(baseUrl + route, data);