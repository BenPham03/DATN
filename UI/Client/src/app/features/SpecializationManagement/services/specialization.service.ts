import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { GetSepecializationResponse, SpecializationCreateDto, SpecializationDeleteDto, SpecializationDto, SpecializationUpdateDto } from '../models/SpecializationDto';
import { MajorDto } from '../../MajorManagement/models/Major';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private http : HttpClient) { }
  getAllSpecialization():Observable<GetSepecializationResponse>{
    return this.http.get<GetSepecializationResponse>(`${Base_Url}/specialization/getallspecialization`);
  }
  addSpecialization(Specialization : SpecializationCreateDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/specialization/add-specialization`,Specialization);
  }
  updateSpecialization(Specialization : SpecializationUpdateDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/specialization/update-specialization`,Specialization);
  }
  deleteSpecialization(Specialization : SpecializationDeleteDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/specialization/delete-specialization`,{
      body: Specialization
    });
  }
}
