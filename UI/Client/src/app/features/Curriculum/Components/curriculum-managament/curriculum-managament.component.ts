import { Component } from '@angular/core';
import { AddCurriculumComponent } from "../add-curriculum/add-curriculum.component";
import { UpdateCurriculumComponent } from "../update-curriculum/update-curriculum.component";
import { CurriculumDeleteDto, CurriculumDto, outputStandard } from '../../Models/Curriculum';
import { CurriculumService } from '../../Services/curriculum.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curriculum-managament',
  imports: [AddCurriculumComponent, UpdateCurriculumComponent, HeaderComponent, NavComponent, CommonModule, FormsModule],
  templateUrl: './curriculum-managament.component.html',
  styleUrl: './curriculum-managament.component.css'
})
export class CurriculumManagamentComponent {
  curriculums : CurriculumDto[] = []
  deleteCurriculumModel : CurriculumDeleteDto ={
    id: "",
    name: "",
    academicYear: "",
    specializationId: "",
    status: 0,
    outputStandard : 0
  }
outputStandard = outputStandard
  constructor(private curriculumService : CurriculumService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.curriculumService.getAllCurriculum().subscribe((data:any) =>{
      this.curriculums = data.items
    });
  }

  deleteMajor(deleteCurriculum: CurriculumDto) {
    this.deleteCurriculumModel = {
      id: deleteCurriculum.id,
      specializationId: deleteCurriculum.specializationId,
      name: deleteCurriculum.name,
      academicYear: deleteCurriculum.academicYear,
      status: deleteCurriculum.status,
      outputStandard: deleteCurriculum.outputStandard
    }
    this.curriculumService.deleteCurriculum(this.deleteCurriculumModel).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Curiculum đã xóa', this.deleteMajor);
    // Gửi dữ liệu lên server tại đây nếu cần
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/curriculum']);
    });
  }
  goToDetail(id : string){
    this.router.navigate(['/curriculumSubject', id]);
  }
}