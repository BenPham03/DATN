import { Component } from '@angular/core';
import { CreateFacultyDto } from '../../Models/FacultyDto';
import { commonDto } from '../../../../core/Common/Status';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacultyService } from '../../Services/faculty.service';

@Component({
  selector: 'app-add-faculty',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent {
  isModalOpen = false;

  faculty : CreateFacultyDto = {
    name: "",
    description: "",
    status: 0
  }
  statusCm: commonDto ={
      status :[0]
    }
    statusCmsp: commonDto ={
    status :[0]
  }

  constructor(private facultyService : FacultyService,
    private router : Router
  ) { }

  ngOnInit(){
    
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.facultyService.addFaculty(this.faculty).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Subject được thêm:', this.faculty);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    this.faculty = { 
      name: "",
      description: "",
      status: 0
    }

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/faculty']);
    });
  }
}
