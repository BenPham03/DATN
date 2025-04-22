import { Component, Input } from '@angular/core';
import { MajorCreateDto, MajorDto, MajorUpdateDto } from '../../models/Major';
import { Faculty } from '../../models/Faculty';
import { MajorService } from '../../services/major-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-major',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-major.component.html',
  styleUrl: './update-major.component.css'
})
export class UpdateMajorComponent {
  isModalOpen = false;

  major : MajorUpdateDto = {
    id: "",
    facultyId: "",
    name: "",
    description: "",
  }

  @Input() majorM!: MajorDto;

  faculties: Faculty[] = [];

  constructor(private majorService : MajorService,
    private router : Router
  ) { }

  ngOnInit(){
    this.majorService.getAllFaculty().subscribe((data:any) =>{
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
    this.major = {
      id: this.majorM.id,
      facultyId: this.majorM.facultyId,
      name: this.majorM.name,
      description: this.majorM.description
    }
    this.majorService.updateMajor(this.major).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Major được update:', this.major);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/majorManagement']);
    });
  }
}
