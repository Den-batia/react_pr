import * as axios from 'axios';
// import hmac from 'js-crypto-hmac'
import CryptoJS from 'crypto-js'

class Api {

    constructor(){
        this.instanseAPI = axios.create({
            // baseURL: 'https://localbitcoins.com',
            // withCredentials: true,
            
        })
        
    }

    toHexString(byteArray) {
        return Array.prototype.map.call(byteArray, function(byte) {
          return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('');
      }

    getTut = () =>{
        // debugger;
        let a = this.instanseAPI.get()
        return a;

    } 
    getNone = () =>{

        let messageObject = {
            'nonce': (new Date()).getTime(),
            'authKey': 'e69002e3d289ab619f6c475703648783',
            'authSecret': '239d5c11689f1dbe250f09a1eb1771a0f661a3db3131b799b7696eb6536f96a3',
            'relPath': '/buy-bitcoins-online/.json' }
        
        let message = messageObject.nonce + messageObject.authKey + messageObject.relPath;
        let signature = CryptoJS.HmacSHA256(message, messageObject.authSecret);
        this.instanseAPI.get('https://localbitcoins.com', {headers:{
            contentType : 'application/x-www-form-urlencoded',
            'Apiauth-Key': messageObject.authKey,
            'Apiauth-Nonce': messageObject.nonce,
            'Apiauth-Signature': signature
        }}).then((response) => {console.log(response); });
        console.log(signature)
        // let a = new Date().getTime()
        // let nonce = (a * 1000).toString()
        // let c =  "f1020f974a8122bd8219e83c0369aa8ahttps://localbitcoins.com/api/notifications/" 
        // c = nonce + c
        // let q = new TextEncoder().encode(c)
        // let sek = new TextEncoder().encode('64a37be0399d548cf3de8815d6215af9d777eb6124c1025ad3923fd540756cf7')
        // axios.get('https://localbitcoins.com/ru/sell-bitcoins-online/byn/.json').then((r)=>{
        //     console.log(r.data)
        // })
    //     hmac.compute(sek, q, 'SHA-256').then( async (hmac) => {

    //         // let sig = this.toHexString(hmac).toUpperCase()
    //         let res = await this.instanseAPI.get('https://localbitcoins.com/ru/sell-bitcoins-online/byn/.json'
    //             // headers: {
    //             //     "Apiauth-Key": "f1020f974a8122bd8219e83c0369aa8a",
    //             //     "Apiauth-Nonce": nonce,
    //             //     "Apiauth-Signature": sig
    //             // }
    //         )
    //         console.log(res)
    //       })

        
        
        
     } 

    asynK = async () => {
        let a = 0
        await setInterval(() => {

            console.log(a++)
        }, 1000)
    }

    asynKK = async () => {
        await setInterval(() => {
            console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqsssss')
        }, 5000)
    }
}

export const api = new Api();
