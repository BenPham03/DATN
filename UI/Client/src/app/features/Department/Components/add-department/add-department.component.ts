import { Component } from '@angular/core';
import { CreateDepartmentDto } from '../../Models/DepartmentDto';
import { Faculty } from '../../../MajorManagement/models/Faculty';
import { DepartmentService } from '../../service/department.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';
import { FacultyService } from '../../../Faculty/Services/faculty.service';

@Component({
  selector: 'app-add-department',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  isModalOpen = false;

  department : CreateDepartmentDto = {
    facultyId: "",
    name: "",
    description: "",
  }
statusCm: commonDto ={
      status :[0]
    }
  faculties: Faculty[] = [];

  constructor(private departmentService : DepartmentService,
    private facultyService : FacultyService,
    private router : Router
  ) { }

  ngOnInit(){
    this.facultyService.getAllFaculty(this.statusCm).subscribe((data:any) =>{
      this.faculties = data.items 
      console.log(this.faculties)

    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.departmentService.addDepartment(this.department).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Department được thêm:', this.department);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    this.department = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/department']);
    });
  }
}