import { Component } from '@angular/core';
import { CurriculumsubjectDto, DeleteCurriculumsubjectDto } from '../../Models/CurriculumSubject';
import { CurriculumSubjectService } from '../../Services/curriculum-subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCurriculumSubjectComponent } from "../add-curriculum-subject/add-curriculum-subject.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateCurriculumSubjectComponent } from "../update-curriculum-subject/update-curriculum-subject.component";

@Component({
  selector: 'app-curriculum-subject-management',
  imports: [AddCurriculumSubjectComponent, NavComponent, HeaderComponent, CommonModule, FormsModule, UpdateCurriculumSubjectComponent],
  templateUrl: './curriculum-subject-management.component.html',
  styleUrl: './curriculum-subject-management.component.css'
})
export class CurriculumSubjectManagementComponent 
{
  curriculumSubjects : CurriculumsubjectDto[] = []
  deleteCurriculumSubjectModel : DeleteCurriculumsubjectDto ={
    curriculumId : "",
    subjectId : "",
    semester: 1
  }
   curriculumId : string | null = null;
  hasIdParam : boolean = false
  constructor(private curriculumSubjectService : CurriculumSubjectService,
   private router : Router,
   private route: ActivatedRoute
  ) {

   }

  ngOnInit(){
    this.curriculumId = this.route.snapshot.paramMap.get('curriculumId');
    this.hasIdParam = this.curriculumId !== null
    console.log(this.hasIdParam)
    this.curriculumSubjectService.getAllCurriculumSubject(this.curriculumId).subscribe((data:any) =>{
      this.curriculumSubjects = data.items
    });
  }

  deleteMajor(deleteCurriculum: DeleteCurriculumsubjectDto) {
    this.deleteCurriculumSubjectModel = {
      curriculumId : deleteCurriculum.curriculumId,
      subjectId : deleteCurriculum.subjectId,
      semester: deleteCurriculum.semester
    }
    this.curriculumSubjectService.deleteCurriculumSubject(this.deleteCurriculumSubjectModel).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Curiculum Subject đã xóa', this.deleteMajor);
    // Gửi dữ liệu lên server tại đây nếu cần
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/curriculumSubject']);
    });
  }
}