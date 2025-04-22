import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMajorComponent } from "../add-major/add-major.component";
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { MajorDeleteDto, MajorDto } from '../../models/Major';
import { MajorService } from '../../services/major-service.service';
import { NavComponent } from '../../../../core/components/nav/nav.component';
import { UpdateMajorComponent } from "../update-major/update-major.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-major-management',
  imports: [HeaderComponent, NavComponent, CommonModule, AddMajorComponent, UpdateMajorComponent],
  templateUrl: './major-management.component.html',
  styleUrl: './major-management.component.css'
})
export class MajorManagementComponent {
  majors : MajorDto[] = []
  deleteMajorModel : MajorDeleteDto ={
    id: "",
    facultyId: "",
    name: "",
    description: "",
  }

  constructor(private majorService : MajorService,
   private router : Router
  ) {

   }

  ngOnInit(){
    this.majorService.getAllMajor().subscribe((data:any) =>{
      this.majors = data.items
    });
  }

  deleteMajor(deleteMajor: MajorDto) {
    this.deleteMajorModel = {
      id: deleteMajor.id,
      facultyId: deleteMajor.facultyId,
      name: deleteMajor.name,
      description: deleteMajor.description
    }
    this.majorService.deleteMajor(this.deleteMajorModel).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Major được update:', this.deleteMajor);
    // Gửi dữ liệu lên server tại đây nếu cần
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/majorManagement']);
    });
  }
}
