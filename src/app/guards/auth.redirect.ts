import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserServiceService } from "../user/user-service.service";

@Injectable({ providedIn: 'root' })
export class AuthRedirect implements CanActivate {
    constructor(private userService: UserServiceService, private router: Router) {}

    canActivate(): boolean {
        if (this.userService.isLogged) {
            // User is logged in, redirect to profile page
            this.router.navigate(['/']);
            return false; // Prevent access to login and register pages
        } else {
            // User is not logged in, allow access to login and register pages
            return true;
        }
    }
}
