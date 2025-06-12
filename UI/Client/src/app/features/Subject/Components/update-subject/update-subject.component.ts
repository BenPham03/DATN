import { Component, Input } from '@angular/core';
import { SubjectDto, SubjectUpdateDto } from '../../models/SubjectDto';
import { SpecializationDto } from '../../../SpecializationManagement/models/SpecializationDto';
import { SpecializationService } from '../../../SpecializationManagement/services/specialization.service';
import { DepartmentService } from '../../../Department/service/department.service';
import { SubjectService } from '../../Services/subject.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentDto } from '../../../Department/Models/DepartmentDto';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-update-subject',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-subject.component.html',
  styleUrl: './update-subject.component.css'
})
export class UpdateSubjectComponent {
  isModalOpen = false;

  subject : SubjectUpdateDto = {
    id :"",
    subjectName :"",
    subjectCode :"",
    theoryCredits :0,
    practiceCredits :0,
    departmentId :"",
    status:0
  }

  @Input() SubjectM!: SubjectDto;
  status = {
    Active: 0,
    Inactive: 1
  }
  specializations: SpecializationDto[] = [];
  departments: DepartmentDto[] = [];
  statusCm: commonDto ={
      status :[0]
    }
    statusCmsp: commonDto ={
    status :[0]
  }

  constructor(private specializationService : SpecializationService,
    private departmentService : DepartmentService,
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
    this.subject = {
    id :this.SubjectM.id,
    subjectName :this.SubjectM.subjectName,
    subjectCode :this.SubjectM.subjectCode,
    theoryCredits :this.SubjectM.theoryCredits,
    practiceCredits :this.SubjectM.practiceCredits,
    departmentId :this.SubjectM.departmentId,
    status:this.SubjectM.status
  }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.subjectService.updateSubject(this.subject).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Subject được update:', this.subject);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/subject']);
    });
  }
}


