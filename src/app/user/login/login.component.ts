import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor (private userService: UserServiceService, private router: Router){}
login(form:NgForm){
  if (form.invalid) {
    return
  }
  console.log(form.value);
  
  this.userService.login();
  this.router.navigate(['/home'])
}
}
