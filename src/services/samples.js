import { http } from './config.js';

export default {
    findAll:() => {
        return http.get('amostras')
    },

    sortOa:(sample) => {
        return sample.sort(function(a, b){
            if (a.nomeVulgar < b.nomeVulgar) {
                return -1;
            }else{
                return true;
            }
        })
    }
}