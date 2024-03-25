import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserServiceService } from "../user/user-service.service";

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
    constructor(private userService: UserServiceService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.isLogged) {
            // User is logged in, allow access to the requested route
            return true;
        } else {
            // User is not logged in, redirect to the login page with return URL
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
