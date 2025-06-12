import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MajorCreateDto } from '../../models/Major';
import { Faculty } from '../../models/Faculty';
import { MajorService } from '../../services/major-service.service';
import { commonDto } from '../../../../core/Common/Status';
import { FacultyService } from '../../../Faculty/Services/faculty.service';

@Component({
  selector: 'app-add-major',
  templateUrl: './add-major.component.html',
  styleUrl: './add-major.component.css',
  imports: [CommonModule, FormsModule]
})
export class AddMajorComponent {
  isModalOpen = false;

  major : MajorCreateDto = {
    facultyId: "",
    name: "",
    majorCode: "",
    description: "",
  }
statusCm: commonDto ={
      status :[0]
    }
  faculties: Faculty[] = [];

  constructor(private majorService : MajorService,
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
    this.majorService.addMajor(this.major).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Major được thêm:', this.major);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    
    this.major = { name: '', description: '', facultyId: '', majorCode: "",};

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/majorManagement']);
    });
  }
}
