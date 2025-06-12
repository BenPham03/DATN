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
import { commonDto } from '../../../../core/Common/Status';

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
    departmentId :"",
    status:0
  }
  statusCm: commonDto ={
      status :[0,1]
    }
  constructor(private subjectService : SubjectService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.subjectService.getAllSubject(this.statusCm).subscribe((data:any) =>{
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
      departmentId :deleteSubject.departmentId,
      status: deleteSubject.status
    }
    this.subjectService.deleteSubject(this.deleteSubjectModel).subscribe({
  next: () => {
    // Xử lý khi xóa thành công (NoContent - 204)
    alert('Subject deleted successfully');
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
    this.subjectService.getAllSubject(this.statusCm).subscribe((data:any) =>{
      this.subjects = data.items
    });
  }
}

