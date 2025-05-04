import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MajorDto } from '../../../MajorManagement/models/Major';
import { SpecializationDto, SpecializationUpdateDto } from '../../models/SpecializationDto';
import { MajorService } from '../../../MajorManagement/services/major-service.service';
import { SpecializationService } from '../../services/specialization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-specialization',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-specialization.component.html',
  styleUrl: './update-specialization.component.css'
})
export class UpdateSpecializationComponent {
  isModalOpen = false;

  specialization : SpecializationUpdateDto = {
    id: "",
    majorId: "",
    name: "",
    description: "",
  }

  @Input() specializationI!: SpecializationUpdateDto;

  majors: MajorDto[] = [];

  constructor(private majorService : MajorService,
    private specializationService : SpecializationService,
    private router : Router
  ) { }

  ngOnInit(){
    this.majorService.getAllMajor().subscribe((data:any) =>{
      this.majors = data.items 
      console.log(this.majorService)

    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.specialization = {
      id: this.specializationI.id,
      majorId: this.specializationI.id,
      name: this.specializationI.name,
      description: this.specializationI.description
    }
    this.specializationService.updateSpecialization(this.specialization).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Major được update:', this.specialization);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/specialization']);
    });
  }
}

