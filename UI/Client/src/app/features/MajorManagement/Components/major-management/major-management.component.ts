import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMajorComponent } from "../add-major/add-major.component";
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { MajorDeleteDto, MajorDto } from '../../models/Major';
import { MajorService } from '../../services/major-service.service';
import { NavComponent } from '../../../../core/components/nav/nav.component';
import { UpdateMajorComponent } from "../update-major/update-major.component";
import { Router } from '@angular/router';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-major-management',
  imports: [HeaderComponent, NavComponent, CommonModule, AddMajorComponent, UpdateMajorComponent],
  templateUrl: './major-management.component.html',
  styleUrl: './major-management.component.css'
})
export class MajorManagementComponent {
  majors : MajorDto[] = []
  deleteMajorModel : MajorDeleteDto ={
    id: "",
    facultyId: "",
    name: "",
    majorCode : "",
    description: "",
    status: 0
  }
statusCm: commonDto ={
    status :[0,1]
  }
  constructor(private majorService : MajorService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.majorService.getAllMajor(this.statusCm).subscribe((data:any) =>{
      this.majors = data.items
    });
  }

  deleteMajor(deleteMajor: MajorDto) {
    this.deleteMajorModel = {
      id: deleteMajor.id,
      facultyId: deleteMajor.facultyId,
      name: deleteMajor.name,
      majorCode: deleteMajor.majorCode,
      description: deleteMajor.description,
      status: deleteMajor.status
    }
    this.majorService.deleteMajor(this.deleteMajorModel).subscribe({
  next: () => {
    // Xử lý khi xóa thành công (NoContent - 204)
    alert('Major deleted successfully');
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

    this.majorService.getAllMajor(this.statusCm).subscribe((data:any) =>{
      this.majors = data.items
    });
  }
}
