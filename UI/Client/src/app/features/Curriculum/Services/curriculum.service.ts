import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { CurriculumCreateDto, CurriculumDeleteDto, CurriculumDto, CurriculumUpdateDto } from '../Models/Curriculum';
import { SpecializationCreateDto, SpecializationDto } from '../../SpecializationManagement/models/SpecializationDto';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http : HttpClient) { }
  getAllCurriculum():Observable<Response>{
    return this.http.get<Response>(`${Base_Url}/curriculum/get-all`);
  }
  addCurriculum(curriculum : CurriculumCreateDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/curriculum/add-curriculum`,curriculum);
  }
  updateCurriculum(curriculum : CurriculumUpdateDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/curriculum/update-curriculum`,curriculum);
  }
  deleteCurriculum(curriculum : CurriculumDeleteDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/curriculum/delete-curriculum`,{
      body: curriculum
    });
  }
}
