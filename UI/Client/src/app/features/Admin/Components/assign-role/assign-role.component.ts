import { Component, Input } from '@angular/core';
import { AccountDto, AssignRoleDto } from '../../Models/Account';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assign-role',
  imports: [CommonModule, FormsModule],
  templateUrl: './assign-role.component.html',
  styleUrl: './assign-role.component.css'
})
export class AssignRoleComponent {
  isModalOpen = false;

  asignRole : AssignRoleDto = {
    username : '',
    role: ''
  }

  role :string =""

  @Input() AsignRoleM!: AccountDto;


  constructor(private accountService : AccountService,
    private router : Router
  ) { }

  ngOnInit(){
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.asignRole = {
      username : this.AsignRoleM.username,
      role : this.role
    }
    this.accountService.assignRole(this.asignRole).subscribe((data: any) =>{
      console.log(data)
    });
    this.closeModal();
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['/admin']);
    // });
  }
}


