import { Component } from '@angular/core';
import { AddAccountComponent } from "../add-account/add-account.component";
import { AccountDto, ResetPasswordDto } from '../../Models/Account';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { NavComponent } from "../../../../core/components/nav/nav.component";
import { AssignRoleComponent } from "../assign-role/assign-role.component";
import { AuthService } from '../../../Account/services/auth.service';

@Component({
  selector: 'app-account',
  imports: [FormsModule, CommonModule, HeaderComponent, NavComponent, AddAccountComponent, AssignRoleComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  accounts : AccountDto[] = []
  accountToReset : ResetPasswordDto = {
    username : "",
    newPassword: "Benpham2003_"
  }
  isAdmin : boolean = false;
  // deleteDepartmentModel : AccountDto ={
  //   id: "",
  //   facultyId: "",
  //   name: "",
  //   description: "",
  //   status: 0
  // }

  constructor(private accountService : AccountService,
   private router : Router,
   private authService : AuthService
  ) {

   }

  ngOnInit(){
    this.accountService.getAllAccount().subscribe((data:any) =>{
      this.accounts = data
    })
    this.isAdmin = this.authService.isAdmin()
  }

  resetPassword(accountR : AccountDto){
    this.accountToReset =  {
      username : accountR.username,
      newPassword: "Benpham2003_"
    }
    this.accountService.resetPassword(this.accountToReset).subscribe((data: any) => {
      alert("Reset password successfully")
    })
  }

  // deleteDepartment(deleteDepartment: DepartmentDto) {
  //   this.deleteDepartmentModel = {
  //     id: deleteDepartment.id,
  //     facultyId: deleteDepartment.facultyId,
  //     name: deleteDepartment.name,
  //     description: deleteDepartment.description,
  //     status: deleteDepartment.status
  //   }
  //   this.departmentService.deleteDepartment(this.deleteDepartmentModel).subscribe((data: any) =>{
  //     console.log(data)
  //   });
  //   console.log('Department được update:', this.deleteDepartment);
  //   // Gửi dữ liệu lên server tại đây nếu cần
    
  //   // Reset form nếu cần
  //   // this.Department = { name: '', description: '', facultyId: '' };

  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/department']);
  //   });
  // }
}
