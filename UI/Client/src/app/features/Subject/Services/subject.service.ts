import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { SubjectCreateDto, SubjectDeleteDto, SubjectUpdateDto } from '../models/SubjectDto';
import { commonDto } from '../../../core/Common/Status';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(private http : HttpClient) { }
  getAllSubject(common: commonDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/subject/get-all`,common);
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
