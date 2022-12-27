import { http } from './config.js';

export default {
    save: (user) => {
        return http.post("user", user);
    }
}