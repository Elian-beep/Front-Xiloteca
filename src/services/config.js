import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://15.228.241.11:8081/amostras'
    // 'https://back-api-xiloteca.vercel.app/'
});