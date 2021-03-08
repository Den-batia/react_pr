import * as axios from 'axios';

class Api {

    constructor(){
        this.instanseAPI = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/v1',
            // withCredentials: true,
            
        })
        
    }
    getNextNews(url){
        const a = 'news' + url
        return this.instanseAPI.get(a)
    }
}

export const api = new Api();
