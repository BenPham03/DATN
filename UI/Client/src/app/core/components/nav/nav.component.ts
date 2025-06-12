import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../features/Account/services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() active!: string;
  @Input() hideAccountMenu : boolean = true;
  isAdmin : boolean = true;
  isDean : boolean = true;
  activeMenu = 'subject';
  // setActive(menu: string) {
  //   this.activeMenu = menu;
  // }

  constructor(
    private authService : AuthService
  ){}
  ngOnInit(){
    this.activeMenu = this.active;
    this.isAdmin = this.authService.isAdmin()
    this.isDean = this.authService.isDean()
  }
}
