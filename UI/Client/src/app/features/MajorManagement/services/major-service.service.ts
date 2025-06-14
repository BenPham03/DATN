import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetFacultyResponse, MajorCreateDto, MajorDeleteDto, MajorDto, MajorUpdateDto, Response } from '../models/Major';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { Faculty } from '../models/Faculty';
import { commonDto } from '../../../core/Common/Status';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(private http : HttpClient) { }
  getAllMajor(status : commonDto):Observable<Response>{
    return this.http.post<Response>(`${Base_Url}/major/get-all-major`,status);
  }
  getAllFaculty():Observable<Faculty[]>{
    return this.http.get<Faculty[]>(`${Base_Url}/faculty/get-faculty`);
  }
  addMajor(major : MajorCreateDto):Observable<any>{
    return this.http.post<any>(`${Base_Url}/major/add-major`,major);
  }
  updateMajor(major : MajorUpdateDto):Observable<any>{
    return this.http.put<any>(`${Base_Url}/major/update-major`,major);
  }
  deleteMajor(major : MajorDeleteDto):Observable<any>{
    return this.http.delete<any>(`${Base_Url}/major/delete-major`,{
      body: major
    });
  }
}
