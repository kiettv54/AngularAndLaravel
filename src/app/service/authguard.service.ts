import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private router: Router) { }

  canActivate(route: import('@angular/router'). ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean {
    if(route.routeConfig.path ==='logout'){
      this.auth.logout();
      this.router.navigate(['login']);
    }
    if(this.auth.isUserLogin()){
     return true;
   }
    return false;
  }
}
