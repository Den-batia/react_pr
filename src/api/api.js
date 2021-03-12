import * as axios from 'axios';

class Api {

    constructor(){
        this.instanseAPI = axios.create({
            baseURL: 'https://on-comments.com/api/v1',
            // withCredentials: true,
            
        })
        
    }
    getNextNews(url){
        const a = 'news' + url
        return this.instanseAPI.get(a)
    }
}

export const api = new Api();
