import { http } from './config.js';

export default {
    findAll: () => {
        return http.get('amostras')
    },
    findAllPage: (urlDestination = process.env.VUE_APP_URL_SAMPLES) => {
        return http.get(urlDestination);
    },
    findSearchPage: (urlDestination = process.env.VUE_APP_URL_SAMPLES_SEARCH, samples) => {
        return http.post(urlDestination, samples);
    }
}