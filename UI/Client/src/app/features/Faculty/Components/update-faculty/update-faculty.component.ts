import { Component, Input } from '@angular/core';
import { FacultyDto, UpdateFacultyDto } from '../../Models/FacultyDto';
import { commonDto } from '../../../../core/Common/Status';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacultyService } from '../../Services/faculty.service';

@Component({
  selector: 'app-update-faculty',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-faculty.component.html',
  styleUrl: './update-faculty.component.css'
})
export class UpdateFacultyComponent {
  isModalOpen = false;

  faculty : UpdateFacultyDto = {
    id: "",
    name: "",
    description: "",
    status: 0
  }

  @Input() FacultyM!: FacultyDto;
  status = {
    Active: 0,
    Inactive: 1
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

    this.faculty = {
    id :this.FacultyM.id,
    name: this.FacultyM.name,
    description :this.FacultyM.description,
    status:this.FacultyM.status
  }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.facultyService.updateFaculty(this.faculty).subscribe((data: any) =>{
      console.log(data)
    });
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/faculty']);
    });
  }
}


