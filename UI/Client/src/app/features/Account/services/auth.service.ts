import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from '../models/LoginRequest';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse';
import { HttpClient } from '@angular/common/http';
import { Base_Url } from '../../../app.config';
import { jwtDecode } from 'jwt-decode';

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
  getToken(): string | null {
    return this.cookieService.get('token') || null;
  }

  getRoleFromToken(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || null;
    } catch (error) {
      return null;
    }
  }

  isAdmin(): boolean {
  return this.getRoleFromToken()?.toLowerCase().includes('admin') ?? false;
}

isDean(): boolean {
  return this.getRoleFromToken()?.toLowerCase().includes('dean') ?? false;
}

}
