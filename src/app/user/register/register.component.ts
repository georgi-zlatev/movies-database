import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (private userService: UserServiceService, private router: Router){}

  register(form:NgForm){
    if (form.invalid) {
      return
    }
    console.log(form.value);
    
    this.userService.register();
    this.router.navigate(['/home'])
  }
}
