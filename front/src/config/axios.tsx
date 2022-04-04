import axios from 'axios';

const clientAxios = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'http://localhost:4000' // return prod api if running in prod
        : 'http://localhost:4000' // return local api if running locally
});

export default clientAxios;