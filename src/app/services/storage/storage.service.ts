import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  createStorage(): Promise<any> {
    return this.storage.create();
  }

  set(key: string, value: any): Promise<any> {
    return this.storage?.set(key, value);
  }

  get(key: string): Promise<any> {
    return this.storage?.get(key);
  }

  clear(): Promise<any> {
    return this.storage.clear();
  }
}
