import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { CreateCurriculumsubjectDto, DeleteCurriculumsubjectDto, UpdateCurriculumsubjectDto } from '../Models/CurriculumSubject';

@Injectable({
  providedIn: 'root'
})
export class CurriculumSubjectService {

  constructor(private http : HttpClient) { }
  getAllCurriculumSubject(id:string | null):Observable<Response>{
    if(id == null) 
      return this.http.get<Response>(`${Base_Url}/curriculumsubject/get-all`);
    return this.http.get<Response>(`${Base_Url}/curriculumsubject/get-all/${id}`);
  }
  addCurriculumSubject(curriculumsubject : CreateCurriculumsubjectDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/curriculumsubject/add-curriculum-subject`,curriculumsubject);
  }
  updateCurriculumSubject(curriculumsubject : UpdateCurriculumsubjectDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/curriculumsubject/update-curriculum-subject`,curriculumsubject);
  }
  deleteCurriculumSubject(curriculumsubject : DeleteCurriculumsubjectDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/curriculumsubject/delete-curriculum-subject`,{
      body: curriculumsubject
    });
  }
}
