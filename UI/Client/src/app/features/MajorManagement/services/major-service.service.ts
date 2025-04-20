import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetFacultyResponse, MajorCreateDto, MajorDto, Response } from '../models/Major';
import { Observable } from 'rxjs';
import { Base_Url } from '../../../app.config';
import { Faculty } from '../models/Faculty';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(private http : HttpClient) { }
  getAllMajor():Observable<Response>{
    return this.http.get<Response>(`${Base_Url}/major/get-all-major`);
  }
  getAllFaculty():Observable<Faculty[]>{
    return this.http.get<Faculty[]>(`${Base_Url}/faculty/get-faculty`);
  }
  addMajor(major : MajorCreateDto):Observable<GetFacultyResponse>{
    return this.http.post<GetFacultyResponse>(`${Base_Url}/major/add-major`,major);
  }
}
