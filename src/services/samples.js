import { http } from './config.js';

export default {
    findAll: () => {
        return http.get('amostras')
    },
    findAllPage: (urlDestination = 'amostras/page') => {
        return http.get(urlDestination);
    },
    findSearchPage: (urlDestination = 'amostras/page/busca', samples) => {
        return http.post(urlDestination, samples);
    }
}