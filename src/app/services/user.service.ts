import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Credentials = {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: string = null

  constructor(private http: HttpClient) { }

  get user() {
    return this._user
  }

  set user(nextVal) {
    this._user = nextVal
    this.userUpdated.emit()
  }

  userUpdated = new EventEmitter();

  login(creds: Credentials) {
    const loginReq = this.http.post<{username: string, displayName: string}>('api/login',creds)
    loginReq.subscribe( ({displayName}) => this.user = displayName, err => console.log('Login failed.') )
    return loginReq
  }
}
