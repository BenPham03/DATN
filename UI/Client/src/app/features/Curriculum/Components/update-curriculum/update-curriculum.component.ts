import { Component, Input } from '@angular/core';
import { CurriculumDto, CurriculumUpdateDto, outputStandard } from '../../Models/Curriculum';
import { SpecializationDto } from '../../../SpecializationManagement/models/SpecializationDto';
import { CurriculumService } from '../../Services/curriculum.service';
import { Router } from '@angular/router';
import { SpecializationService } from '../../../SpecializationManagement/services/specialization.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-update-curriculum',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-curriculum.component.html',
  styleUrl: './update-curriculum.component.css'
})
export class UpdateCurriculumComponent {
  isModalOpen = false;

  selectedStandard= outputStandard 
  curriculum : CurriculumUpdateDto = {
    id: "",
    name: "",
    academicYear: "",
    specializationId: "",
    status: 0,
    outputStandard : 0
  }
  @Input() curriculumM!: CurriculumDto;
  status = {
    Active: 0,
    Inactive: 1
  }
  specializations: SpecializationDto[] = [];
  statusCmsp: commonDto ={
      status :[0]
    }

  constructor(private curriculumService : CurriculumService,
    private specializationService: SpecializationService,
    private router : Router,
    
  ) { }

  ngOnInit(){
    this.specializationService.getAllSpecialization(this.statusCmsp).subscribe((data:any) =>{
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
    this.curriculum = {
      id: this.curriculumM.id,
      name: this.curriculumM.name,
      academicYear: this.curriculumM.academicYear,
      specializationId: this.curriculumM.specializationId,
      status: Number(this.curriculumM.status),
      outputStandard : this.curriculumM.outputStandard
    }
    this.curriculumService.updateCurriculum(this.curriculum).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Curriculum được update:', this.curriculum);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/curriculum']);
    });
  }
}
