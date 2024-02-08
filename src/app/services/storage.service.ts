import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage: Storage | null = null;

  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  constructor(private storage: Storage) {
    this.init()
  }

  async init(){
    this._storage = await this.storage.create();
    const username = await this.get('username');
    this.usernameSource.next(username || '');
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  public onChangeUsername() {
    this.usernameSource.next(localStorage.getItem('username') || '');
  }

}
