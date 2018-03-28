import axios from 'axios';

const baseUrl = 'https://presto-core.herokuapp.com';

const header = (token) => ({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
});

export const routes = {
    registerRestaurant: '/register/resto/',
    registerCustomer: '/register/customer/',
    login: '/login-main/',
    createReservation: (customerId, restoId) => `/reserve/${customerId}/${restoId}/`,
    acceptReservation: customerId => `/reservations/${customerId}/accept/`,
    declineReservation: customerId => `/reservations/${customerId}/decline/`,
    reservations: '/reservations/',
    likeRestaraunt: id => `/like-resto/${id}/`,
    dislikeRestaraunt: id => `/dislike-resto/${id}/`,
    customer: id => `/customers/${id}/`,
    resto: id => `/restos/${id}/`,
    restos: '/restos/'
};

export const aGet = route => {
    const token = localStorage.token;
    return axios.get(baseUrl + route, { headers: header(token) });
};

export const aPatch = (route, data) => {
    const token = localStorage.token;
    return axios.patch(baseUrl + route, data, { headers: header(token) });
};

export const aPost = (route, data) => {
    const token = localStorage.token;
    if (route === routes.registerRestaurant || route === routes.registerCustomer || route === routes.login) {
        return axios.post(baseUrl + route, data);
    }
    return axios.post(baseUrl + route, data, { headers: header(token) });
};

export const aDelete = route => {
    const token = localStorage.token;
    return axios.delete(baseUrl + route, { headers: header(token) });
};

export const aPut = (route, data) => {
    const token = localStorage.token;
    return axios.put(baseUrl + route, data, { headers: header(token) });
};
