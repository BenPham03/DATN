import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { AddSpecializationComponent } from "../add-specialization/add-specialization.component";
import { UpdateSpecializationComponent } from "../update-specialization/update-specialization.component";
import { SpecializationDeleteDto, SpecializationDto } from '../../models/SpecializationDto';
import { SpecializationService } from '../../services/specialization.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-specialization-managerment',
  imports: [HeaderComponent, NavComponent, AddSpecializationComponent, UpdateSpecializationComponent, CommonModule, FormsModule],
  templateUrl: './specialization-managerment.component.html',
  styleUrl: './specialization-managerment.component.css'
})
export class SpecializationManagermentComponent {
  specializations : SpecializationDto[] = []
  deleteSpecializationModel : SpecializationDeleteDto ={
    id: "",
    majorId: "",
    name: "",
    description: "",
    status:0
  }
  statusCm: commonDto ={
      status :[0,1]
    }

  constructor(private specializationService : SpecializationService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.specializationService.getAllSpecialization(this.statusCm).subscribe((data:any) =>{
      this.specializations = data.items
      console.log(data.items);
    });
  }

  deleteSpecialization(deleteSpecialization: SpecializationDto) {
    this.deleteSpecializationModel = {
      id: deleteSpecialization.id,
      majorId: deleteSpecialization.majorId,
      name: deleteSpecialization.name,
      description: deleteSpecialization.description,
      status: deleteSpecialization.status
    }
    console.log(this.deleteSpecializationModel)
    this.specializationService.deleteSpecialization(this.deleteSpecializationModel).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Specialization được update:', this.deleteSpecializationModel);
    // Gửi dữ liệu lên server tại đây nếu cần
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/specialization']);
    });
  }
}
