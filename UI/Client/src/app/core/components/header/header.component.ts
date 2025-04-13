import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true, // <- THÊM DÒNG NÀY
})
export class HeaderComponent {
  showMenu = false;
  userName = "UserName";

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  logout() {
    // Thực hiện xử lý logout tại đây
    console.log("Đăng xuất");
  }
}
