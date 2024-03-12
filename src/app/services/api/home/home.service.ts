import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ST_ROOT } from './../api.root';

export interface API_RESPONSE_ANNOUNCE {
  title: string | null | undefined;
  image: string | null | undefined;
  link: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  async announce(): Promise<any> {
    const url = `${ST_ROOT.announce}/salestools/announce/lists`;
    return this.http.get(url).toPromise();
  }
}
