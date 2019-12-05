import { FlashMessagesService } from 'angular2-flash-messages';
import { map } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.authenticatedUser().pipe(map(user => {
      if(user) {
        return true;
      }else {
        
        this.flashMessage
        .show('You are not connect, please check your account', {
          cssClass: 'alert-warning',
          timeout: 5000 
        })
         this.router.navigate(['/login']);
      }
    }));
  }
  
}
