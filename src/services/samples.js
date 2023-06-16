import { http } from './config.js';

export default {
    findAll:() => {
        return http.get('amostras')
    },
    findAllPage: (urlDestination = 'amostras/page') => {
        // if (!urlDestination) urlDestination = 
        return http.get(`${urlDestination}`)
    },
    findCod:(text) => {
        return http.get(`amostras/busca/cod?cod=${text}`)
    },
    findFamilia:(text) => {
        return http.get(`amostras/busca/familia?familia=${text}`)
    },
    findNV:(text) => {
        return http.get(`amostras/busca/nv?nomeVulgar=${text}`)
    },
    findNC:(text) => {
        return http.get(`amostras/busca/nc?nomeCientifico=${text}`)
    }
}