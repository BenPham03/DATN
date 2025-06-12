import { Injectable } from '@angular/core';
import { Base_Url } from '../../../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurriculumDetail } from '../Models/CurriculumDetail';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }
  getCurriculumDetail(id : string):Observable<CurriculumDetail[]>{
    return this.http.get<CurriculumDetail[]>(`${Base_Url}/curriculum/get-detail/${id}`);
  }
}
