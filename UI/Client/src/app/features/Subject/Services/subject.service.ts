import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { SubjectCreateDto, SubjectDeleteDto, SubjectUpdateDto } from '../models/SubjectDto';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(private http : HttpClient) { }
  getAllSubject():Observable<Response>{
    return this.http.get<Response>(`${Base_Url}/subject/get-all`);
  }
  addSubject(subject : SubjectCreateDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/subject/add-subject`,subject);
  }
  updateSubject(subject : SubjectUpdateDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/subject/update-subject`,subject);
  }
  deleteSubject(subject : SubjectDeleteDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/subject/delete-subject`,{
      body: subject
    });
  }
}
