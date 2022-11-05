import { http } from './config.js';

export default {
    findAll:() => {
        return http.get('amostras')
    }
}