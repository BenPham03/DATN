import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { AddDepartmentComponent } from "../add-department/add-department.component";
import { UpdateDepartmentComponent } from "../update-department/update-department.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteDepartmentDto, DepartmentDto } from '../../Models/DepartmentDto';
import { DepartmentService } from '../../service/department.service';
import { Router } from '@angular/router';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-department-management',
  imports: [HeaderComponent, NavComponent, AddDepartmentComponent, UpdateDepartmentComponent, CommonModule, FormsModule],
  templateUrl: './department-management.component.html',
  styleUrl: './department-management.component.css'
})
export class DepartmentManagementComponent {
  departments : DepartmentDto[] = []
  deleteDepartmentModel : DeleteDepartmentDto ={
    id: "",
    facultyId: "",
    name: "",
    description: "",
    status: 0
  }
  statusCm: commonDto ={
      status :[0,1]
    }

  constructor(private departmentService : DepartmentService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.departmentService.getAllDepartment(this.statusCm).subscribe((data:any) =>{
      this.departments = data.items
    });
  }

  deleteDepartment(deleteDepartment: DepartmentDto) {
    this.deleteDepartmentModel = {
      id: deleteDepartment.id,
      facultyId: deleteDepartment.facultyId,
      name: deleteDepartment.name,
      description: deleteDepartment.description,
      status: deleteDepartment.status
    }
    this.departmentService.deleteDepartment(this.deleteDepartmentModel).subscribe({
  next: () => {
    // Xử lý khi xóa thành công (NoContent - 204)
    alert('Department deleted successfully');
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

    this.departmentService.getAllDepartment(this.statusCm).subscribe((data:any) =>{
      this.departments = data.items
    });
  }
}
