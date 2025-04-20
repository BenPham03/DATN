import { Component } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { NavComponent } from "../../../core/components/nav/nav.component";
import { MajorDto, Response } from '../models/Major';
import { MajorService } from '../services/major-service.service';
import { CommonModule } from '@angular/common';
import { AddMajorComponent } from "../add-major/add-major.component";

@Component({
  selector: 'app-major-management',
  imports: [HeaderComponent, NavComponent, CommonModule, AddMajorComponent],
  templateUrl: './major-management.component.html',
  styleUrl: './major-management.component.css'
})
export class MajorManagementComponent {
  majors : MajorDto[] = []

  constructor(private majorService : MajorService) {

   }

  ngOnInit(){
    this.majorService.getAllMajor().subscribe((data:any) =>{
      this.majors = data.items
    });
  }
}
