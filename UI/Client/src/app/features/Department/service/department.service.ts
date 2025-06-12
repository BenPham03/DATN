import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { Faculty } from '../../MajorManagement/models/Faculty';
import { CreateDepartmentDto, DeleteDepartmentDto, DepartmentDto, UpdateDepartmentDto } from '../Models/DepartmentDto';
import { commonDto } from '../../../core/Common/Status';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http : HttpClient) { }
  getAllDepartment(common : commonDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/department/get-all`, common);
  }
  getAllFaculty():Observable<Faculty[]>{
    return this.http.get<Faculty[]>(`${Base_Url}/faculty/get-faculty`);
  }
  addDepartment(department : CreateDepartmentDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/department/create`,department);
  }
  updateDepartment(department : UpdateDepartmentDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/department/update`,department);
  }
  deleteDepartment(department : DeleteDepartmentDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/department/delete`,{
      body: department
    });
  }
}
