import { Component, Input } from '@angular/core';
import { DepartmentDto, UpdateDepartmentDto } from '../../Models/DepartmentDto';
import { Faculty } from '../../../MajorManagement/models/Faculty';
import { DepartmentService } from '../../service/department.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-department',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.css'
})
export class UpdateDepartmentComponent {
  isModalOpen = false;

  department : UpdateDepartmentDto = {
    id: "",
    facultyId: "",
    name: "",
    description: "",
  }

  @Input() DepartmentM!: DepartmentDto;

  faculties: Faculty[] = [];

  constructor(private departmentService : DepartmentService,
    private router : Router
  ) { }

  ngOnInit(){
    this.departmentService.getAllFaculty().subscribe((data:any) =>{
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
    this.department = {
      id: this.DepartmentM.id,
      facultyId: this.DepartmentM.facultyId,
      name: this.DepartmentM.name,
      description: this.DepartmentM.description
    }
    this.departmentService.updateDepartment(this.department).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Department được update:', this.department);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/department']);
    });
  }
}

