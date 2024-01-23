import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }


    
  encryptWithKey(data, key){
    const encodeText = CryptoJS.AES.encrypt(data, key)
    return encodeText.toString()
  }

  decryptWithKey(encodeData, key){
   //console.log('decode',  CryptoConfig.private_key)
   const bytes=CryptoJS.AES.decrypt(encodeData, key)
   return bytes.toString(CryptoJS.enc.Utf8)    
  }


  
}
