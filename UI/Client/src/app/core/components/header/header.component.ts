import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../features/Account/services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true, // <- THÊM DÒNG NÀY
})
export class HeaderComponent {
  showMenu = false;
  userName = "UserName";
  isLogined = false

  constructor(
    private authService : AuthService,
    private router : Router
  ){
  }
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  ngOnInit(){
    this.isLogined = this.authService.getToken() !== null
  }
  logout() {
    // Thực hiện xử lý logout tại đây
    this.authService.logout()
    console.log("Đăng xuất");
    this.router.navigate(['/']);
  }
}
