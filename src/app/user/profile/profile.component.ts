import { Component } from '@angular/core';
import { ProfileDetails } from 'src/app/types/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    usename: 'Ivan Ivanov',
    tel: '123-678-345',
    email: 'test.testov@test.bg',
  }

  onEdit(): void{
    this.showEditMode = true
  }
}
