import { Component } from '@angular/core';
import { SpecializationCreateDto } from '../../models/SpecializationDto';
import { MajorDto } from '../../../MajorManagement/models/Major';
import { SpecializationService } from '../../services/specialization.service';
import { Router } from '@angular/router';
import { MajorService } from '../../../MajorManagement/services/major-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-add-specialization',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-specialization.component.html',
  styleUrl: './add-specialization.component.css'
})
export class AddSpecializationComponent {
isModalOpen = false;

  specialization : SpecializationCreateDto = {
    name: "",
    description: "",
    majorId: ""
  }

  major: MajorDto[] = [];
statusCm: commonDto ={
    status :[0]
  }
  constructor(private specializationService : SpecializationService,
    private majorService : MajorService,
    private router : Router
  ) { }
  
  ngOnInit(){
    this.majorService.getAllMajor(this.statusCm).subscribe((data:any) =>{
      this.major = data.items 
      console.log(this.major)

    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.specializationService.addSpecialization(this.specialization).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Major được thêm:', this.major);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    this.specialization = { name: '', description: '', majorId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/specialization']);
    });
  }
}
