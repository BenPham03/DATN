import { Component } from '@angular/core';
import { SubjectCreateDto } from '../../models/SubjectDto';
import { SpecializationDto } from '../../../SpecializationManagement/models/SpecializationDto';
import { DepartmentDto } from '../../../Department/Models/DepartmentDto';
import { DepartmentService } from '../../../Department/service/department.service';
import { SpecializationService } from '../../../SpecializationManagement/services/specialization.service';
import { Router } from '@angular/router';
import { SubjectService } from '../../Services/subject.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-add-subject',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.css'
})
export class AddSubjectComponent {
  isModalOpen = false;

  subject : SubjectCreateDto = {
    subjectName :"",
    subjectCode :"",
    theoryCredits :0,
    practiceCredits :0,
    departmentId :"",
  }

  specializations: SpecializationDto[] = [];
  departments: DepartmentDto[] = [];
  statusCm: commonDto ={
      status :[0]
    }
    statusCmsp: commonDto ={
    status :[0]
  }

  constructor(private departmentService : DepartmentService,
    private specializationService : SpecializationService,
    private subjectService : SubjectService,
    private router : Router
  ) { }

  ngOnInit(){
    this.departmentService.getAllDepartment(this.statusCm).subscribe((data:any) =>{
      this.departments = data.items 
    });
    this.specializationService.getAllSpecialization(this.statusCmsp).subscribe((data:any) =>{
      this.specializations = data.items 
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.subjectService.addSubject(this.subject).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Subject được thêm:', this.subject);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    this.subject = { 
      subjectName :"",
      subjectCode :"",
      theoryCredits :0,
      practiceCredits :0,
      departmentId :"", };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/subject']);
    });
  }
}