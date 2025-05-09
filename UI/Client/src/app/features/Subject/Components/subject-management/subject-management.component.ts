import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { AddDepartmentComponent } from "../../../Department/Components/add-department/add-department.component";
import { AddSubjectComponent } from "../add-subject/add-subject.component";
import { UpdateSubjectComponent } from "../update-subject/update-subject.component";
import { SubjectDeleteDto, SubjectDto } from '../../models/SubjectDto';
import { SubjectService } from '../../Services/subject.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-management',
  imports: [HeaderComponent, NavComponent, AddSubjectComponent, UpdateSubjectComponent, CommonModule, FormsModule],
  templateUrl: './subject-management.component.html',
  styleUrl: './subject-management.component.css'
})
export class SubjectManagementComponent {
  subjects : SubjectDto[] = []
  deleteSubjectModel : SubjectDeleteDto ={
    id :"",
    subjectName :"",
    subjectCode :"",
    theoryCredits :0,
    practiceCredits :0,
    specializationId :"",
    departmentId :"",
  }

  constructor(private subjectService : SubjectService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.subjectService.getAllSubject().subscribe((data:any) =>{
      this.subjects = data.items
    });
  }

  deleteSubject(deleteSubject: SubjectDto) {
    this.deleteSubjectModel = {
      id :deleteSubject.id,
      subjectName :deleteSubject.subjectName,
      subjectCode :deleteSubject.subjectCode,
      theoryCredits :deleteSubject.theoryCredits,
      practiceCredits :deleteSubject.practiceCredits,
      specializationId :deleteSubject.specializationId,
      departmentId :deleteSubject.departmentId,
    }
    this.subjectService.deleteSubject(this.deleteSubjectModel).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Department được update:', this.deleteSubjectModel);
    // Gửi dữ liệu lên server tại đây nếu cần
    
    // Reset form nếu cần
    // this.Department = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/subject']);
    });
  }
}

