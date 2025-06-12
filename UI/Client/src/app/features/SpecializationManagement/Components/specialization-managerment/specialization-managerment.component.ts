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
    this.specializationService.deleteSpecialization(this.deleteSpecializationModel).subscribe({
  next: () => {
    // Xử lý khi xóa thành công (NoContent - 204)
    alert('Specialization deleted successfully');
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

    this.specializationService.getAllSpecialization(this.statusCm).subscribe((data:any) =>{
      this.specializationService = data.items
    });
  }
}
