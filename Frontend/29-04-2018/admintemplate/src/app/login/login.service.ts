import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOGIN_URL } from './login.url-config';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  loginData(data) {
    return this.http.post(LOGIN_URL, data);
  }
}
