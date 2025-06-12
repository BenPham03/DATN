import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/LoginRequest';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: LoginRequest;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private cookieService: CookieService,
  ){
    this.model = {
      UserName: '',
      Password: '',
    };
  }
  decodeToken(token: string) {
    try {
      const decoded: any = jwtDecode(token);
      console.log(token)
      return decoded;
    } catch (error) {
      console.log('Error to decode token');
      return null;
    }
  }
  getRole(token: string) {
    const decodedToken = this.decodeToken(token);
    console.log(decodedToken)
    if (decodedToken) {
      return decodedToken[
        'role'
      ]; // Extract the role
    }
    return null; // If no role found
  }

  onFormSubmit() {
    this.authservice.login(this.model).subscribe({
      next: (response) => {
        this.cookieService.set(
          'token',
          `Bearer ${response.token}`,
          undefined,
          '/',
          undefined,
          true,
          'Strict'
        );
        if (response.token) {
        const role = this.getRole(response.token);
          if (role && role.toLowerCase().includes('admin')) {
            this.router.navigateByUrl('/account');
          } else if (role && role.toLowerCase().includes('Dean')) {
            this.router.navigateByUrl('/subject');
          } else {
            this.router.navigateByUrl('/');
          }
        }
      },
      error: (error) => {
        alert('Wrong email or password');
      },
    });
  }

}
