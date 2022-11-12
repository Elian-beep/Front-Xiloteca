import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://15.228.241.11:8081'
    // URL LOCAL:       http://localhost:8081
    // URL LOCAL-AWS: http://15.228.241.11:8081
    // URL OFICIAL:     https://back-api-xiloteca.vercel.app/
});