import axios from '../config/axios';

export const getListCategoryApi = () => axios({
    method: 'GET',
    url: '/category'
});