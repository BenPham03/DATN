import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { AddFacultyComponent } from "../add-faculty/add-faculty.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteFacultyDto, FacultyDto } from '../../Models/FacultyDto';
import { commonDto } from '../../../../core/Common/Status';
import { UpdateFacultyComponent } from "../update-faculty/update-faculty.component";
import { FacultyService } from '../../Services/faculty.service';

@Component({
  selector: 'app-faculty',
  imports: [HeaderComponent, NavComponent, AddFacultyComponent, CommonModule, FormsModule, UpdateFacultyComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  faculties : FacultyDto[] = []
  deleteFacultyModel : DeleteFacultyDto ={
    id :"",
    name :"",
    description :"",
    status:0
  }
  statusCm: commonDto ={
      status :[0,1]
    }
  constructor(private facultyService : FacultyService,
  ) {

   }

  ngOnInit(){
    this.facultyService.getAllFaculty(this.statusCm).subscribe((data:any) =>{
      this.faculties = data.items
    });
  }

  deleteSubject(deleteFaculty: FacultyDto) {
    this.deleteFacultyModel = {
      id :deleteFaculty.id,
      name :deleteFaculty.name,
      description :deleteFaculty.description,
      status :deleteFaculty.status,
    }
    this.facultyService.deleteFaculty(this.deleteFacultyModel).subscribe({
  next: () => {
    // Xử lý khi xóa thành công (NoContent - 204)
    alert('Faculty deleted successfully');
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

    this.facultyService.getAllFaculty(this.statusCm).subscribe((data:any) =>{
      this.faculties = data.items
    });
  }
}


