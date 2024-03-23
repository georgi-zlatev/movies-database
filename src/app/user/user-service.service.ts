import { Injectable } from '@angular/core';
import { UserForAuthentication } from '../types/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: UserForAuthentication | undefined;
  USER_KEY = '[user]'

  get isLogged(): boolean{
    return !!this.user
  }

  constructor(){
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined
    }
  }

  login() {
    this.user = {
      id: '5fa64c1f2183ce1728ff3723',
      firstName: 'Georgi',
      email: 'georgi@abv.bg',
      password: '123123',
      phoneNumber: '123-123-123-123'
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
   }
}
