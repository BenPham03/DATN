import { Component } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { NavComponent } from "../../../core/components/nav/nav.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurriculumDetail } from '../Models/CurriculumDetail';
import { HomeService } from '../Services/home.service';
import { CurriculumService } from '../../Curriculum/Services/curriculum.service';
import { CurriculumDto } from '../../Curriculum/Models/Curriculum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NavComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  curriculumDetail : CurriculumDetail[] =[]
  curriculum : CurriculumDto[] =[]

  constructor(
    private homeService: HomeService,
    private router: Router,
    private curriculumService: CurriculumService
  ){
  }
  ngOnInit(){
    
    this.curriculumService.getAllCurriculum().subscribe((data :any) => {
      this.curriculum = data.items;
    })
  }

  onSelectChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  const selectedId = selectElement.value;
  if (selectedId) {
    this.getData(selectedId);
  }
}

getData(id: string): void {
  console.log(id)
  this.homeService.getCurriculumDetail(id).subscribe(data => {
    this.curriculumDetail = data;
  });
}

}
