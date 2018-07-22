import axios from 'axios'
const API_URL= 'https://api.github.com/';
export const HTTP = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default HTTP
