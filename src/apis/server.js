import axios from 'axios';

export const apiUrl = 'https://jsonplaceholder.typicode.com';

export default axios.create({
    baseURL: apiUrl
});