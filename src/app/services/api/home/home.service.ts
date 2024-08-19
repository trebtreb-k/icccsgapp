import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';
import { StorageService } from './../../storage/storage.service';

export interface API_RESPONSE_ANNOUNCE {
  title: string | null | undefined;
  image: string | null | undefined;
  link: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient,private storage: StorageService,) {}

  async announce(): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/lists`;

    console.log("***url***",url);
    const token = await this.storage.get('USER_TOKEN');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    console.log(headers);
    
    return this.http.get(url, { headers }).toPromise();
    
    //return this.http.get(url).toPromise();
  }

}
