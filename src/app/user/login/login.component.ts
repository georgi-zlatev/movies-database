import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor (private userService: UserServiceService, private router: Router){}
emailValidator(control: FormControl) {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!control.value || emailRegExp.test(control.value)) {
    return null; // valid
  }

  return { invalidEmail: true }; // invalid
}

login(form: NgForm) {
  if (form.invalid) {
    return;
  }
  console.log(form.value);
  this.userService.login();
  this.router.navigate(['/home']);
}
}
