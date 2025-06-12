import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Base_Url } from "../../../app.config";
import { CreateFacultyDto, DeleteFacultyDto, UpdateFacultyDto } from "../Models/FacultyDto";
import { Observable } from "rxjs";
import { commonDto } from "../../../core/Common/Status";
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

    constructor(private http : HttpClient) { }
  getAllFaculty(common: commonDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/faculty/get-faculty`,common);
  }
  addFaculty(faculty : CreateFacultyDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/faculty/createFaculty`,faculty);
  }
  updateFaculty(faculty : UpdateFacultyDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/faculty/updateFaculty`,faculty);
  }
  deleteFaculty(faculty : DeleteFacultyDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/faculty/deleteFaculty`,{
      body: faculty
    });
  }
}
