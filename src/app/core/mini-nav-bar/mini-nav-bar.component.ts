import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-mini-nav-bar',
  templateUrl: './mini-nav-bar.component.html',
  styleUrls: ['./mini-nav-bar.component.css']
})
export class MiniNavBarComponent {
constructor(private userService: UserServiceService, private router: Router) {}

get isLoggedIn(): boolean{
  return this.userService.isLogged;
}

get firstName(): string{
  return this.userService.user?.firstName || '';
}

logout(){
  this.userService.logout();
  this.router.navigate(['/home'])
}
}
