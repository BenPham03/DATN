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

  goToDetail(curriculumId : string){
      this.router.navigate([`/curriculumSubject/${curriculumId}`]);
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
    this.curriculumService.deleteCurriculum(this.deleteCurriculumModel).subscribe({
  next: () => {
    // Xử lý khi xóa thành công (NoContent - 204)
    alert('Curriculum deleted successfully');
  },
  error: (err) => {
    if (err.status === 400) {
      // Nếu backend trả về BadRequest với thông báo lỗi
      const errorMessage = typeof err.error === 'string' ? err.error : 'Invalid request';
      alert(errorMessage); // Hiển thị thông báo lỗi
    } else {
      alert('An unexpected error occurred');
    }
  }
});

    this.curriculumService.getAllCurriculum().subscribe((data:any) =>{
      this.curriculums = data.items
    });
  }
}