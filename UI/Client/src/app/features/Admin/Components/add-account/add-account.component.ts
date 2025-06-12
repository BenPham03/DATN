import { Component } from '@angular/core';
import { RegisterDto } from '../../Models/Account';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent  {
  isModalOpen = false;

  register : RegisterDto = {
    username: "",
    email: "",
    password: "",
  }


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
    this.accountService.registerLectureAccount(this.register).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Department được thêm:', this.register);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    this.register = { username: '', email: '', password: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin']);
    });
  }
}