import axios from '../config/axios';

export const getAllProductApi = () => axios({
    method: 'GET',
    url: '/product'
});

export const getDetailProductApi = (productSlug) => axios({
    method: 'GET',
    url: `/product/${productSlug}`
});