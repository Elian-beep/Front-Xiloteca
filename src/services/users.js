import { http } from './config.js';

export default {
    save: (user) => {
        return http.post("user", user);
    },
    findEmail: (email) => {
        return http.get(`user/busca/em?email=${email}`)
        // if (user != []) {
        //     return true;
        // }else{
        //     return false
        // }
        // return user != null ? true : false;
    }
}