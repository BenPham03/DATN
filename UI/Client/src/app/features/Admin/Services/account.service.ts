import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { AccountDto, AssignRoleDto, RegisterDto, ResetPasswordDto } from '../Models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }
  getAllAccount():Observable<AccountDto>{
    return this.http.get<AccountDto>(`${Base_Url}/authenticate/all-users`);
  }
  registerDeanAccount(account: RegisterDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/authenticate/register-dean`, account);
  }
  registerLectureAccount(account: RegisterDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/authenticate/register-Lecture`, account);
  }
  resetPassword(account: ResetPasswordDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/authenticate/reset-password`, account);
  }
  assignRole(account: AssignRoleDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/authenticate/assign-role`, account);
  }
}
