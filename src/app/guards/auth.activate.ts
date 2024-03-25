import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserServiceService } from "../user/user-service.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate{
    constructor (private userService: UserServiceService, private router: Router){}
    canActivate(): boolean {
        if (this.userService.isLogged) {
            // If logged in, redirect to home page or any other desired route
            this.router.navigate(['/home']);
            return false; // Prevents access to the route
          }
          return true; // Allow access to the route
    }
}