import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from '../models/LoginRequest';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse';
import { HttpClient } from '@angular/common/http';
import { Base_Url } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }
  logout() {
    console.log('dl');
    this.cookieService.delete('token');
  }
  login(requestLogin : LoginRequest) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>(
      `${Base_Url}/authenticate/login`,
      requestLogin
    )
  }
}
