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

const token = localStorage.token;

export const aGet = route => axios.get(baseUrl + route, { headers: header(token) });

export const aPost = (route, data) => axios.post(baseUrl + route, data,
    route === routes.registerRestaurant || route === routes.registerCustomer || route === routes.login
    ? { headers: header(token) }
    : null);

export const aDelete = route => axios.delete(baseUrl + route, { headers: header(token) });
export const aPut = (route, data) => axios.put(baseUrl + route, data, { headers: header(token) });