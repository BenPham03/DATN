import { Component } from '@angular/core';
import { CurriculumCreateDto, outputStandard } from '../../Models/Curriculum';
import { SpecializationDto } from '../../../SpecializationManagement/models/SpecializationDto';
import { CurriculumService } from '../../Services/curriculum.service';
import { Router } from '@angular/router';
import { SpecializationService } from '../../../SpecializationManagement/services/specialization.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-add-curriculum',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-curriculum.component.html',
  styleUrl: './add-curriculum.component.css'
})
export class AddCurriculumComponent {
  isModalOpen = false;

  curriculum : CurriculumCreateDto = {
    name: "",
    academicYear: "",
    specializationId: "",
    outputStandard: 0
  }
statusCm: commonDto ={
    status :[0,1]
  }
  selectedStandard = outputStandard

  specializations: SpecializationDto[] = [];

  constructor(private curriculumService : CurriculumService,
    private specializationService: SpecializationService,
    private router : Router
  ) { }

  ngOnInit(){
    this.specializationService.getAllSpecialization(this.statusCm).subscribe((data:any) =>{
      this.specializations = data.items 

    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.curriculumService.addCurriculum(this.curriculum).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Curriculum được thêm:', this.curriculum);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    
    this.curriculum = { name: "", academicYear: "", specializationId: "", outputStandard: 0};

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/curriculum']);
    });
  }
}

