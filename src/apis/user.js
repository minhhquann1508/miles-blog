import axios from '../config/axios';

export const signupApi = (data) => axios({
    method: 'POST',
    url: '/user/sign-up',
    data
});


export const signinApi = (data) => axios({
    method: 'POST',
    url: '/user/sign-in',
    data
})

export const signinGoogle = (data) => axios({
    method: 'POST',
    url: '/user/google',
    data
})