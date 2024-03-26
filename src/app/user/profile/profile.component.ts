import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'Ivan Ivanov',
    tel: '123-678-345',
    email: 'test.testov@test.bg',
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators. required, emailValidator(EMAIL_DOMAINS)]],
  })

  constructor(private fb: FormBuilder) {}

  onToggle(): void{
    this.showEditMode = !this.showEditMode
  }

  saveProfileHandle(): void {
    console.log('invoked', this.form.value);
    
    if (this.form.invalid) {
      return
    }
    this.profileDetails = this.form.value as ProfileDetails;
    this.onToggle()
  }
}
